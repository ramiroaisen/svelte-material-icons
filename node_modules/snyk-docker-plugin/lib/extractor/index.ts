import { extractDockerArchive } from "./layer";
import { DockerArchiveManifest, ExtractAction, ExtractedLayers } from "./types";

/**
 * Given a path on the file system to a docker-archive, open it up to inspect the layers
 * and look for specific files. File content can be transformed with a custom callback function if needed.
 * @param fileSystemPath Path to an existing docker-archive.
 * @param extractActions This denotes a file pattern to look for and how to transform the file if it is found.
 * By default the file is returned raw if no processing is desired.
 */
async function getDockerArchiveLayersAndManifest(
  fileSystemPath: string,
  extractActions: ExtractAction[],
): Promise<{
  layers: ExtractedLayers;
  manifest: DockerArchiveManifest;
}> {
  const dockerArchive = await extractDockerArchive(
    fileSystemPath,
    extractActions,
  );

  const extractedLayers: ExtractedLayers = {};
  // TODO: This removes the information about the layer name, maybe we would need it in the future?
  for (const layer of dockerArchive.layers) {
    // go over extracted files products found in this layer
    for (const filename of Object.keys(layer)) {
      // file was not found
      if (!Reflect.has(extractedLayers, filename)) {
        extractedLayers[filename] = layer[filename];
      }
    }
  }

  return {
    layers: extractedLayers,
    manifest: dockerArchive.manifest,
  };
}

function isBufferType(type: string | Buffer): type is Buffer {
  return (type as Buffer).buffer !== undefined;
}

function isStringType(type: string | Buffer): type is string {
  return (type as string).substring !== undefined;
}

function getContentAsBuffer(
  extractedLayers: ExtractedLayers,
  extractAction: ExtractAction,
): Buffer | undefined {
  const content = getContent(extractedLayers, extractAction);
  return content !== undefined && isBufferType(content) ? content : undefined;
}

function getContentAsString(
  extractedLayers: ExtractedLayers,
  extractAction: ExtractAction,
): string | undefined {
  const content = getContent(extractedLayers, extractAction);
  return content !== undefined && isStringType(content) ? content : undefined;
}

function getContent(
  extractedLayers: ExtractedLayers,
  extractAction: ExtractAction,
): string | Buffer | undefined {
  const fileName = extractAction.fileNamePattern;
  return fileName in extractedLayers &&
    extractAction.actionName in extractedLayers[fileName]
    ? extractedLayers[fileName][extractAction.actionName]
    : undefined;
}

export {
  getDockerArchiveLayersAndManifest,
  getContentAsString,
  getContentAsBuffer,
};
