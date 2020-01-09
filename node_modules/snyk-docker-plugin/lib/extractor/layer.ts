import { createReadStream } from "fs";
import * as minimatch from "minimatch";
import { basename, resolve as resolvePath } from "path";
import { Readable } from "stream";
import { extract, Extract } from "tar-stream";
import { streamToString } from "../stream-utils";
import { applyCallbacks } from "./callbacks";
import {
  DockerArchiveManifest,
  ExtractAction,
  ExtractedLayers,
  ExtractedLayersAndManifest,
  FileNameAndContent,
} from "./types";

/**
 * Retrieve the products of files content from the specified docker-archive.
 * @param dockerArchiveFilesystemPath Path to image file saved in docker-archive format.
 * @param extractActions Array of pattern-callbacks pairs.
 * @returns Array of extracted files products sorted by the reverse order of the layers from last to first.
 */
export async function extractDockerArchive(
  dockerArchiveFilesystemPath: string,
  extractActions: ExtractAction[],
): Promise<ExtractedLayersAndManifest> {
  return new Promise((resolve, reject) => {
    const tarExtractor: Extract = extract();
    const layers: Record<string, ExtractedLayers> = {};
    let manifest: DockerArchiveManifest;

    tarExtractor.on("entry", async (header, stream, next) => {
      if (header.type === "file") {
        if (isTarFile(header.name)) {
          layers[header.name] = await extractImageLayer(stream, extractActions);
        } else if (isManifestFile(header.name)) {
          manifest = await getManifestFile(stream);
        }
      }

      stream.resume(); // auto drain the stream
      next(); // ready for next entry
    });

    tarExtractor.on("finish", () => {
      resolve(getLayersContentAndArchiveManifest(manifest, layers));
    });

    tarExtractor.on("error", (error) => reject(error));

    createReadStream(dockerArchiveFilesystemPath).pipe(tarExtractor);
  });
}

/**
 * Extract key files from the specified TAR stream.
 * @param layerTarStream image layer as a Readable TAR stream. Note: consumes the stream.
 * @param extractActions array of pattern, callbacks pairs
 * @returns extracted file products
 */
export async function extractImageLayer(
  layerTarStream: Readable,
  extractActions: ExtractAction[],
): Promise<ExtractedLayers> {
  return new Promise((resolve, reject) => {
    const result: ExtractedLayers = {};
    const tarExtractor: Extract = extract();

    tarExtractor.on("entry", async (headers, stream, next) => {
      if (headers.type === "file") {
        const absoluteFileName = resolvePath("/", headers.name);
        const processedResult = await extractFileAndProcess(
          absoluteFileName,
          stream,
          extractActions,
        );
        if (processedResult !== undefined) {
          result[absoluteFileName] = processedResult;
        }
      }

      stream.resume(); // auto drain the stream
      next(); // ready for next entry
    });

    tarExtractor.on("finish", () => {
      // all layer level entries read
      resolve(result);
    });

    tarExtractor.on("error", (error) => reject(error));

    layerTarStream.pipe(tarExtractor);
  });
}

/**
 * Note: consumes the stream.
 */
async function extractFileAndProcess(
  fileName: string,
  fileStream: Readable,
  extractActions: ExtractAction[],
): Promise<FileNameAndContent | undefined> {
  const matchedActions = extractActions.filter((action) =>
    minimatch(fileName, action.fileNamePattern, { dot: true }),
  );

  if (matchedActions.length > 0) {
    return await applyCallbacks(matchedActions, fileStream);
  }

  return undefined;
}

function getLayersContentAndArchiveManifest(
  manifest: DockerArchiveManifest,
  layers: Record<string, ExtractedLayers>,
): ExtractedLayersAndManifest {
  // skip (ignore) non-existent layers
  // get the layers content without the name
  // reverse layers order from last to first
  const filteredLayers = manifest.Layers.filter(
    (layersName) => layers[layersName],
  )
    .map((layerName) => layers[layerName])
    .reverse();

  return {
    layers: filteredLayers,
    manifest,
  };
}

/**
 * Note: consumes the stream.
 */
function getManifestFile(stream: Readable): Promise<DockerArchiveManifest> {
  return streamToString(stream).then((manifestFile) => {
    const manifest = JSON.parse(manifestFile);
    return manifest[0];
  });
}

function isManifestFile(name: string): boolean {
  return name === "manifest.json";
}

function isTarFile(name: string): boolean {
  // For both "docker save" and "skopeo copy" style archives the
  // layers are represented as tar archives whose names end in .tar.
  // For Docker this is "layer.tar", for Skopeo - "<sha256ofLayer>.tar".
  return basename(name).endsWith(".tar");
}
