import { ComposerJsonFile, ComposerLockFile, ComposerParserResponse, SystemPackages } from './types';
declare function buildDepTree(lockFileContent: string, manifestFileContent: string, defaultProjectName: string, systemVersions: SystemPackages, includeDev?: boolean): ComposerParserResponse;
declare function buildDepTreeFromFiles(basePath: string, lockFileName: string, systemVersions: SystemPackages, includeDev?: boolean): ComposerParserResponse;
export { buildDepTree, buildDepTreeFromFiles, SystemPackages, ComposerJsonFile, ComposerLockFile, ComposerParserResponse, };
