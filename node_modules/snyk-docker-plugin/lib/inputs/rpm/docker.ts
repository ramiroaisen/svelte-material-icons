import { Docker, DockerOptions } from "../../docker";

export function getRpmDbFileContent(
  targetImage: string,
  options?: DockerOptions,
): Promise<string> {
  return new Docker(targetImage, options)
    .run("rpm", [
      "--nodigest",
      "--nosignature",
      "-qa",
      "--qf",
      '"%{NAME}\t%|EPOCH?{%{EPOCH}:}|%{VERSION}-%{RELEASE}\t%{SIZE}\n"',
    ])
    .catch((error) => {
      const stderr = error.stderr;
      if (typeof stderr === "string" && stderr.indexOf("not found") >= 0) {
        return { stdout: "", stderr: "" };
      }
      throw error;
    })
    .then((output) => output.stdout);
}
