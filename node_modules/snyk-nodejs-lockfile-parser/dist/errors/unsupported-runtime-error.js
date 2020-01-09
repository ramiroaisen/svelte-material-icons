"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnsupportedRuntimeError extends Error {
    constructor(...args) {
        super(...args);
        this.name = 'UnsupportedRuntimeError';
        this.code = 500;
        Error.captureStackTrace(this, UnsupportedRuntimeError);
    }
}
exports.UnsupportedRuntimeError = UnsupportedRuntimeError;
//# sourceMappingURL=unsupported-runtime-error.js.map