import * as minimatch from "minimatch";
import * as fspath from "path";
import * as lsu from "./ls-utils";
import * as subProcess from "./sub-process";

export { Docker, DockerOptions };

interface DockerOptions {
  host?: string;
  tlsVerify?: string;
  tlsCert?: string;
  tlsCaCert?: string;
  tlsKey?: string;
}

class Docker {
  public static run(args: string[], options?: DockerOptions) {
    return subProcess.execute("docker", [
      ...Docker.createOptionsList(options),
      ...args,
    ]);
  }

  private static createOptionsList(options: any) {
    const opts: string[] = [];
    if (!options) {
      return opts;
    }
    if (options.host) {
      opts.push(`--host=${options.host}`);
    }
    if (options.tlscert) {
      opts.push(`--tlscert=${options.tlscert}`);
    }
    if (options.tlscacert) {
      opts.push(`--tlscacert=${options.tlscacert}`);
    }
    if (options.tlskey) {
      opts.push(`--tlskey=${options.tlskey}`);
    }
    if (options.tlsverify) {
      opts.push(`--tlsverify=${options.tlsverify}`);
    }
    return opts;
  }

  private optionsList: string[];

  constructor(private targetImage: string, options?: DockerOptions) {
    this.optionsList = Docker.createOptionsList(options);
  }

  /**
   * Runs the command, catching any expected errors and returning them as normal
   * stderr/stdout result.
   */
  public async runSafe(cmd: string, args: string[] = []) {
    try {
      return await this.run(cmd, args);
    } catch (error) {
      const stderr: string = error.stderr;
      if (typeof stderr === "string") {
        if (
          stderr.indexOf("No such file") >= 0 ||
          stderr.indexOf("file not found") >= 0
        ) {
          return { stdout: error.stdout, stderr };
        }
      }
      throw error;
    }
  }

  public run(cmd: string, args: string[] = []) {
    return subProcess.execute("docker", [
      ...this.optionsList,
      "run",
      "--rm",
      "--entrypoint",
      '""',
      "--network",
      "none",
      this.targetImage,
      cmd,
      ...args,
    ]);
  }

  public async inspect(targetImage: string) {
    return subProcess.execute("docker", [
      ...this.optionsList,
      "inspect",
      targetImage,
    ]);
  }

  public async catSafe(filename: string) {
    return this.runSafe("cat", [filename]);
  }

  public async lsSafe(path: string, recursive?: boolean) {
    let params = "-1ap";
    if (recursive) {
      params += "R";
    }
    return this.runSafe("ls", [params, path]);
  }

  /**
   * Find files on a docker image according to a given list of glob expressions.
   */
  public async findGlobs(
    globs: string[],
    exclusionGlobs: string[] = [],
    path: string = "/",
    recursive: boolean = true,
  ) {
    const res: string[] = [];
    const root = await this.lsSafe(path, recursive).then((output) =>
      lsu.parseLsOutput(output.stdout),
    );

    lsu.iterateFiles(root, (f) => {
      const filepath = fspath.join(f.path, f.name);
      let exclude = false;
      exclusionGlobs.forEach((g) => {
        if (!exclude && minimatch(filepath, g)) {
          exclude = true;
        }
      });
      if (!exclude) {
        globs.forEach((g) => {
          if (minimatch(filepath, g)) {
            res.push(filepath);
          }
        });
      }
    });

    return res;
  }
}
