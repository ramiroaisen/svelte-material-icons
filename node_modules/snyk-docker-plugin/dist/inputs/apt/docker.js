"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const docker_1 = require("../../docker");
function getAptDbFileContent(targetImage, options) {
    const docker = new docker_1.Docker(targetImage, options);
    return Promise.all([
        docker.catSafe("/var/lib/dpkg/status").then((output) => output.stdout),
        docker
            .catSafe("/var/lib/apt/extended_states")
            .then((output) => output.stdout),
    ]).then((fileContents) => ({
        dpkgFile: fileContents[0],
        extFile: fileContents[1],
    }));
}
exports.getAptDbFileContent = getAptDbFileContent;
//# sourceMappingURL=docker.js.map