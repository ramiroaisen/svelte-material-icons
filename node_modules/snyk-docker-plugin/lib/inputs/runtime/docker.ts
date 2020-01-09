import { Docker, DockerOptions } from "../../docker";

export function getRuntime(
  options: DockerOptions,
): Promise<string | undefined> {
  return Docker.run(["version"], options)
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
