"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const docker_1 = require("../../docker");
function getApkDbFileContent(targetImage, options) {
    return new docker_1.Docker(targetImage, options)
        .catSafe("/lib/apk/db/installed")
        .then((output) => output.stdout);
}
exports.getApkDbFileContent = getApkDbFileContent;
//# sourceMappingURL=docker.js.map