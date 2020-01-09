import { SystemPackages, PackageRefCount, LockFilePackage, ComposerJsonFile, ComposerLockFile, DepTreeDependencies } from '../types';
export declare class ComposerParser {
    private static readonly MAX_PACKAGE_REPEATS;
    static getVersion(depObj: ComposerJsonFile | LockFilePackage): string;
    static buildDependencies(composerJsonObj: ComposerJsonFile, composerLockObj: ComposerLockFile, depObj: ComposerJsonFile | LockFilePackage, systemPackages: SystemPackages, includeDev?: boolean, isDevTree?: boolean, depRecursiveArray?: string[], packageRefCount?: PackageRefCount): DepTreeDependencies;
}
