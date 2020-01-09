import { Docker, DockerOptions } from "../docker";
import { DockerInspectOutput } from "./types";

export { detect };

async function detect(
  targetImage: string,
  options?: DockerOptions,
): Promise<DockerInspectOutput> {
  try {
    const info = await new Docker(targetImage, options).inspect(targetImage);
    return JSON.parse(info.stdout)[0];
  } catch (error) {
    if (error.stderr.includes("No such object")) {
      throw new Error(
        `Docker error: image was not found locally: ${targetImage}`,
      );
    }
    throw new Error(`Docker error: ${error.stderr}`);
  }
}
