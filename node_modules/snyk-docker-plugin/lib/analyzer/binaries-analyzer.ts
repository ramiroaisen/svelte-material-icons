import { DockerOptions } from "../docker";
import { AnalysisType, Binary, ImageAnalysis } from "./types";

export async function analyze(
  targetImage: string,
  installedPackages: string[],
  pkgManager?: string,
  options?: DockerOptions,
): Promise<ImageAnalysis> {
  const binaries = await getBinaries(
    targetImage,
    installedPackages,
    pkgManager,
    options,
  );
  return {
    Image: targetImage,
    AnalyzeType: AnalysisType.Binaries,
    Analysis: binaries,
  };
}

const binaryVersionExtractors = {
  node: require("./binary-version-extractors/node"),
  openjdk: require("./binary-version-extractors/openjdk-jre"),
};

async function getBinaries(
  targetImage: string,
  installedPackages: string[],
  pkgManager?: string,
  options?: DockerOptions,
): Promise<Binary[]> {
  const binaries: Binary[] = [];
  for (const versionExtractor of Object.keys(binaryVersionExtractors)) {
    const extractor = binaryVersionExtractors[versionExtractor];
    if (
      extractor.installedByPackageManager(
        installedPackages,
        pkgManager,
        options,
      )
    ) {
      continue;
    }
    const binary = await extractor.extract(targetImage, options);
    if (binary) {
      binaries.push(binary);
    }
  }
  return binaries;
}
