import { Docker, DockerOptions } from "../../docker";

export function getApkDbFileContent(
  targetImage: string,
  options?: DockerOptions,
): Promise<string> {
  return new Docker(targetImage, options)
    .catSafe("/lib/apk/db/installed")
    .then((output) => output.stdout);
}
