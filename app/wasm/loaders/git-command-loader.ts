import init, {
  create_git_command,
  InitOutput,
  update_cargo_toml,
} from "../scripts/git_commands_wasm";

class GitCommandsLoader {
  private static instance: InitOutput | null = null;

  static async init(): Promise<void> {
    if (this.instance) return;

    try {
      this.instance = await init();
    } catch (error) {
      console.error("Failed to initialize WASM module:", error);
      throw error;
    }
  }

  static createGitCommand(packagesJson: string, packageName: string): string {
    if (!this.instance) {
      throw new Error("WASM module not initialized. Call init() first.");
    }
    return create_git_command(packagesJson, packageName);
  }

  static update_cargo_toml(gitCommand: string, cargoToml: string): string {
    if (!this.instance) {
      throw new Error("WASM module not initialized. Call init() first.");
    }

    return update_cargo_toml(cargoToml, gitCommand);
  }
}

export default GitCommandsLoader;
