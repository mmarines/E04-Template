import Phaser from "phaser";
import type { Hud } from "../hud.ts";
import type { LaunchOptions } from "../main.ts";
import { loadSounds } from "../sounds.ts";
import { makeTextures } from "../textures.ts";

export class BootScene extends Phaser.Scene {
  constructor(
    private readonly hud: Hud,
    private readonly options: LaunchOptions,
  ) {
    super("boot");
  }

  create(): void {
    if (!this.textures.exists("player")) {
      makeTextures(this);
      loadSounds(this);
    }
    this.scene.start("title");
  }
}
