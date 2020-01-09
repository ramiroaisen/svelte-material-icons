import { unlink, writeFile } from "fs";
import { tmpdir } from "os";
import { resolve as resolvePath } from "path";
import { getContentAsBuffer } from "../../extractor";
import { ExtractAction, ExtractedLayers } from "../../extractor/types";
import { streamToBuffer } from "../../stream-utils";
import { CmdOutput, execute } from "../../sub-process";

export const getRpmDbFileContentAction: ExtractAction = {
  actionName: "rpm-db",
  fileNamePattern: "/var/lib/rpm/Packages",
  callback: streamToBuffer,
};

export async function getRpmDbFileContent(
  extractedLayers: ExtractedLayers,
): Promise<string> {
  const apkDb = getContentAsBuffer(extractedLayers, getRpmDbFileContentAction);
  if (!apkDb) {
    return "";
  }

  const filePath = generateTempFileName();
  await writeToFile(filePath, apkDb);

  try {
    // This is the tool that is expected to be found on the system:
    // https://github.com/snyk/go-rpmdb
    const cmdOutput = await execute("rpmdb", ["-f", filePath]).catch(
      handleError,
    );
    return cmdOutput.stdout || "";
  } finally {
    await removeFile(filePath);
  }
}

function handleError(error): CmdOutput | never {
  const stderr = error.stderr;
  if (typeof stderr === "string" && stderr.indexOf("not found") >= 0) {
    return { stdout: "", stderr: "" };
  }
  throw error;
}

function generateTempFileName(): string {
  const tmpPath = tmpdir();
  const randomFileName = Math.random().toString();

  return resolvePath(tmpPath, randomFileName);
}

function writeToFile(filePath: string, apkDb: Buffer): Promise<void> {
  return new Promise((resolve, reject) => {
    writeFile(filePath, apkDb, { encoding: "binary" }, (err) => {
      if (!err) {
        resolve();
      } else {
        reject(err);
      }
    });
  });
}

function removeFile(filePath: string): Promise<void> {
  return new Promise((resolve) => {
    unlink(filePath, () => {
      resolve();
    });
  });
}
