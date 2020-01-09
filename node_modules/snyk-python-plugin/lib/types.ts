export interface DependencyUpdates {
  [from: string]: {
    upgradeTo: string;
  };
}

export interface ManifestFiles {
  // Typically these are requirements.txt and Pipfile;
  // the plugin supports paths with subdirectories
  [name: string]: string; // name-to-content
}
