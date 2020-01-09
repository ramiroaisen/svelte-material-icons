import { OSRelease } from "../types";

export async function tryOSRelease(text: string): Promise<OSRelease | null> {
  if (!text) {
    return null;
  }
  const idRes = text.match(/^ID=(.+)$/m);
  if (!idRes) {
    throw new Error("Failed to parse /etc/os-release");
  }
  const name = idRes[1].replace(/"/g, "");
  const versionRes = text.match(/^VERSION_ID=(.+)$/m);
  let version = versionRes ? versionRes[1].replace(/"/g, "") : "unstable";

  if (name === "ol") {
    version = version.split(".")[0];
  }

  return { name, version };
}

export async function tryLsbRelease(text: string): Promise<OSRelease | null> {
  if (!text) {
    return null;
  }
  const idRes = text.match(/^DISTRIB_ID=(.+)$/m);
  const versionRes = text.match(/^DISTRIB_RELEASE=(.+)$/m);
  if (!idRes || !versionRes) {
    throw new Error("Failed to parse /etc/lsb-release");
  }
  const name = idRes[1].replace(/"/g, "").toLowerCase();
  const version = versionRes[1].replace(/"/g, "");
  return { name, version };
}

export async function tryDebianVersion(
  text: string,
): Promise<OSRelease | null> {
  if (!text) {
    return null;
  }
  text = text.trim();
  if (text.length < 2) {
    throw new Error("Failed to parse /etc/debian_version");
  }
  return { name: "debian", version: text.split(".")[0] };
}

export async function tryAlpineRelease(
  text: string,
): Promise<OSRelease | null> {
  if (!text) {
    return null;
  }
  text = text.trim();
  if (text.length < 2) {
    throw new Error("Failed to parse /etc/alpine-release");
  }
  return { name: "alpine", version: text };
}

export async function tryRedHatRelease(
  text: string,
): Promise<OSRelease | null> {
  if (!text) {
    return null;
  }
  const idRes = text.match(/^(\S+)/m);
  const versionRes = text.match(/(\d+)\./m);
  if (!idRes || !versionRes) {
    throw new Error("Failed to parse /etc/redhat-release");
  }
  const name = idRes[1].replace(/"/g, "").toLowerCase();
  const version = versionRes[1].replace(/"/g, "");
  return { name, version };
}

export async function tryOracleRelease(
  text: string,
): Promise<OSRelease | null> {
  if (!text) {
    return null;
  }
  const idRes = text.match(/^(\S+)/m);
  const versionRes = text.match(/(\d+\.\d+)/m);
  if (!idRes || !versionRes) {
    throw new Error("Failed to parse /etc/oracle-release");
  }
  const name = idRes[1].replace(/"/g, "").toLowerCase();
  const version = versionRes[1].replace(/"/g, "").split(".")[0];

  return { name, version };
}
