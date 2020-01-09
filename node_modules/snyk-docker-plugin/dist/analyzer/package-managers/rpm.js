"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
function analyze(targetImage, rpmDbFilecontent) {
    return Promise.resolve({
        Image: targetImage,
        AnalyzeType: types_1.AnalysisType.Rpm,
        Analysis: parseOutput(rpmDbFilecontent),
    });
}
exports.analyze = analyze;
function parseOutput(output) {
    const pkgs = [];
    for (const line of output.split("\n")) {
        parseLine(line, pkgs);
    }
    return pkgs;
}
function parseLine(text, pkgs) {
    const [name, version, size] = text.split("\t");
    if (name && version && size) {
        const pkg = {
            Name: name,
            Version: version,
            Source: undefined,
            Provides: [],
            Deps: {},
            AutoInstalled: undefined,
        };
        pkgs.push(pkg);
    }
}
//# sourceMappingURL=rpm.js.map