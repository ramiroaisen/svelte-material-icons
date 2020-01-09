export interface DependencyUpdates {
    [from: string]: {
        upgradeTo: string;
    };
}
export interface ManifestFiles {
    [name: string]: string;
}
