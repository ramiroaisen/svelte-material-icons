"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LOCK_FILE_NAME = {
    npm: 'package-lock.json',
    yarn: 'yarn.lock',
};
const INSTALL_COMMAND = {
    npm: 'npm install',
    yarn: 'yarn install',
};
class OutOfSyncError extends Error {
    constructor(dependencyName, lockFileType) {
        super(`Dependency ${dependencyName} was not found in ` +
            `${LOCK_FILE_NAME[lockFileType]}. Your package.json and ` +
            `${LOCK_FILE_NAME[lockFileType]} are probably out of sync. Please run ` +
            `"${INSTALL_COMMAND[lockFileType]}" and try again.`);
        this.code = 422;
        this.name = 'OutOfSyncError';
        this.dependencyName = dependencyName;
        this.lockFileType = lockFileType;
        Error.captureStackTrace(this, OutOfSyncError);
    }
}
exports.OutOfSyncError = OutOfSyncError;
//# sourceMappingURL=out-of-sync-error.js.map