"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const docker_1 = require("../../docker");
function getRuntime(options) {
    return docker_1.Docker.run(["version"], options)
        .then((output) => {
        const versionMatch = /Version:\s+(.*)\n/.exec(output.stdout);
        if (versionMatch) {
            return "docker " + versionMatch[1];
        }
        return undefined;
    })
        .catch((error) => {
        throw new Error(`Docker error: ${error.stderr}`);
    });
}
exports.getRuntime = getRuntime;
//# sourceMappingURL=docker.js.map