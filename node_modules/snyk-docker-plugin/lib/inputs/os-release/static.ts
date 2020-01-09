import { getContentAsString } from "../../extractor";
import { ExtractAction, ExtractedLayers } from "../../extractor/types";
import { streamToString } from "../../stream-utils";
import { OsReleaseFilePath } from "../../types";

const getOsReleaseAction: ExtractAction = {
  actionName: "os-release",
  fileNamePattern: OsReleaseFilePath.Linux,
  callback: streamToString,
};

const getLsbReleaseAction: ExtractAction = {
  actionName: "lsb-release",
  fileNamePattern: OsReleaseFilePath.Lsb,
  callback: streamToString,
};

const getDebianVersionAction: ExtractAction = {
  actionName: "debian-version",
  fileNamePattern: OsReleaseFilePath.Debian,
  callback: streamToString,
};

const getAlpineReleaseAction: ExtractAction = {
  actionName: "alpine-release",
  fileNamePattern: OsReleaseFilePath.Alpine,
  callback: streamToString,
};

const getRedHatReleaseAction: ExtractAction = {
  actionName: "redhat-release",
  fileNamePattern: OsReleaseFilePath.RedHat,
  callback: streamToString,
};

const getOracleReleaseAction: ExtractAction = {
  actionName: "oracle-release",
  fileNamePattern: OsReleaseFilePath.Oracle,
  callback: streamToString,
};

const osReleaseActionMap = {
  [OsReleaseFilePath.Linux]: getOsReleaseAction,
  [OsReleaseFilePath.Lsb]: getLsbReleaseAction,
  [OsReleaseFilePath.Debian]: getDebianVersionAction,
  [OsReleaseFilePath.Alpine]: getAlpineReleaseAction,
  [OsReleaseFilePath.RedHat]: getRedHatReleaseAction,
  [OsReleaseFilePath.Oracle]: getOracleReleaseAction,
};

export const getOsReleaseActions: ExtractAction[] = [
  getOsReleaseAction,
  getLsbReleaseAction,
  getDebianVersionAction,
  getAlpineReleaseAction,
  getRedHatReleaseAction,
  getOracleReleaseAction,
];

export function getOsRelease(
  extractedLayers: ExtractedLayers,
  releasePath: OsReleaseFilePath,
): string {
  const osRelease = getContentAsString(
    extractedLayers,
    osReleaseActionMap[releasePath],
  );
  return osRelease || "";
}
