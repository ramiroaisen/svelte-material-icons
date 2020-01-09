import { ExtractedLayers } from "../../extractor/types";
import { getOsReleaseStatic as getOsRelease } from "../../inputs/os-release";
import { OsReleaseFilePath } from "../../types";
import { OSRelease } from "../types";
import {
  tryAlpineRelease,
  tryDebianVersion,
  tryLsbRelease,
  tryOracleRelease,
  tryOSRelease,
  tryRedHatRelease,
} from "./release-analyzer";

export async function detect(
  extractedLayers: ExtractedLayers,
): Promise<OSRelease> {
  let osRelease = await tryOSRelease(
    getOsRelease(extractedLayers, OsReleaseFilePath.Linux),
  );

  // First generic fallback
  if (!osRelease) {
    osRelease = await tryLsbRelease(
      getOsRelease(extractedLayers, OsReleaseFilePath.Lsb),
    );
  }

  // Fallbacks for specific older distributions
  if (!osRelease) {
    osRelease = await tryDebianVersion(
      getOsRelease(extractedLayers, OsReleaseFilePath.Debian),
    );
  }

  if (!osRelease) {
    osRelease = await tryAlpineRelease(
      getOsRelease(extractedLayers, OsReleaseFilePath.Alpine),
    );
  }

  if (!osRelease) {
    osRelease = await tryOracleRelease(
      getOsRelease(extractedLayers, OsReleaseFilePath.Oracle),
    );
  }

  if (!osRelease) {
    osRelease = await tryRedHatRelease(
      getOsRelease(extractedLayers, OsReleaseFilePath.RedHat),
    );
  }

  if (!osRelease) {
    throw new Error("Failed to detect OS release");
  }

  // Oracle Linux identifies itself as "ol"
  if (osRelease.name.trim() === "ol") {
    osRelease.name = "oracle";
  }

  return osRelease;
}
