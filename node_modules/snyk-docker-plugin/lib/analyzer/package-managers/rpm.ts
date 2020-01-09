import { AnalysisType, AnalyzedPackage, ImageAnalysis } from "../types";

export function analyze(
  targetImage: string,
  rpmDbFilecontent: string,
): Promise<ImageAnalysis> {
  return Promise.resolve({
    Image: targetImage,
    AnalyzeType: AnalysisType.Rpm,
    Analysis: parseOutput(rpmDbFilecontent),
  });
}

function parseOutput(output: string) {
  const pkgs: AnalyzedPackage[] = [];
  for (const line of output.split("\n")) {
    parseLine(line, pkgs);
  }
  return pkgs;
}

function parseLine(text: string, pkgs: AnalyzedPackage[]) {
  const [name, version, size] = text.split("\t");
  if (name && version && size) {
    const pkg: AnalyzedPackage = {
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
