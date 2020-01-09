import { Docker, DockerOptions } from "../../docker";

export function getAptDbFileContent(
  targetImage: string,
  options?: DockerOptions,
): Promise<{
  dpkgFile: string;
  extFile: string;
}> {
  const docker = new Docker(targetImage, options);

  return Promise.all([
    docker.catSafe("/var/lib/dpkg/status").then((output) => output.stdout),
    docker
      .catSafe("/var/lib/apt/extended_states")
      .then((output) => output.stdout),
  ]).then((fileContents) => ({
    dpkgFile: fileContents[0],
    extFile: fileContents[1],
  }));
}
