import { Readable } from "stream";

export type ExtractCallback = (
  dataStream: Readable,
) => Promise<string | Buffer>;

export type FileNameAndContent = Record<string, string | Buffer>;

export interface ExtractedLayers {
  [layerName: string]: FileNameAndContent;
}

export interface ExtractedLayersAndManifest {
  layers: ExtractedLayers[];
  manifest: DockerArchiveManifest;
}

export interface DockerArchiveManifest {
  // Usually points to the JSON file in the archive that describes how the image was built.
  Config: string;
  RepoTags: string[];
  // The names of the layers in this archive, usually in the format "<sha256>.tar" or "<sha256>/layer.tar".
  Layers: string[];
}

export interface ExtractAction {
  // This name should be unique across all actions used.
  actionName: string;
  // The path patter to look for.
  fileNamePattern: string;
  // Applies the given callback once a file match is found given the pattern above.
  // The idea is that the file content can be transformed in any way.
  callback?: ExtractCallback;
}
