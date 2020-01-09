import * as Debug from "debug";
import { DockerOptions } from "../docker";
import * as dockerFile from "../docker-file";
import * as binariesAnalyzer from "./binaries-analyzer";
import * as imageInspector from "./image-inspector";
import * as osReleaseDetector from "./os-release";

import apkInputDocker = require("../inputs/apk/docker");
import aptInputDocker = require("../inputs/apt/docker");
import rpmInputDocker = require("../inputs/rpm/docker");
import apkAnalyzer = require("./package-managers/apk");
import aptAnalyzer = require("./package-managers/apt");
import rpmAnalyzer = require("./package-managers/rpm");

const debug = Debug("snyk");

export async function analyze(
  targetImage: string,
  dockerfileAnalysis?: dockerFile.DockerFileAnalysis,
  options?: DockerOptions,
) {
  const [imageInspection, osRelease] = await Promise.all([
    imageInspector.detect(targetImage, options),
    osReleaseDetector.detectDynamically(
      targetImage,
      dockerfileAnalysis,
      options,
    ),
  ]);

  const [
    apkDbFileContent,
    aptDbFileContent,
    rpmDbFileContent,
  ] = await Promise.all([
    apkInputDocker.getApkDbFileContent(targetImage, options),
    aptInputDocker.getAptDbFileContent(targetImage, options),
    rpmInputDocker.getRpmDbFileContent(targetImage, options),
  ]);

  const results = await Promise.all([
    apkAnalyzer.analyze(targetImage, apkDbFileContent),
    aptAnalyzer.analyze(targetImage, aptDbFileContent),
    rpmAnalyzer.analyze(targetImage, rpmDbFileContent),
  ]).catch((err) => {
    debug(`Error while running analyzer: '${err.stderr}'`);
    throw new Error("Failed to detect installed OS packages");
  });

  const { installedPackages, pkgManager } = getInstalledPackages(
    results as any[],
  );

  const binaries = await binariesAnalyzer
    .analyze(targetImage, installedPackages, pkgManager, options)
    .catch((err) => {
      debug(`Error while running binaries analyzer: '${err}'`);
      throw new Error("Failed to detect binaries versions");
    });

  return {
    imageId: imageInspection.Id,
    osRelease,
    results,
    binaries,
    imageLayers: imageInspection.RootFS && imageInspection.RootFS.Layers,
  };
}

function getInstalledPackages(
  results: any[],
): { installedPackages: string[]; pkgManager?: string } {
  const dockerAnalysis = results.find((res) => {
    return res.Analysis && res.Analysis.length > 0;
  });

  if (!dockerAnalysis) {
    return { installedPackages: [] };
  }
  const installedPackages = dockerAnalysis.Analysis.map((pkg) => pkg.Name);
  let pkgManager = dockerAnalysis.AnalyzeType;
  if (pkgManager) {
    pkgManager = pkgManager.toLowerCase();
  }
  return { installedPackages, pkgManager };
}
