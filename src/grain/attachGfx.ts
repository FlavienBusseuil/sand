import { ColorSource, Graphics } from "pixi.js";
import { gridToCanvasSpace } from "../canvas/toCanvasSpace";
import { Grain } from "./grain";

export const defaultGrainColor = 0xffb000;

type Options = {
	grainColor?: ColorSource;
};

export function attachGfxToGrain(
	grain: Grain,
	{ grainColor = defaultGrainColor }: Options = {}
) {
	const { x, y } = gridToCanvasSpace(grain.position, grain.sand.grid);

	const shape = new Graphics()
		.rect(0, 0, grain.sand.grid.gfx.sizeCell, grain.sand.grid.gfx.sizeCell)
		.fill(grainColor);

	shape.position.set(x, y);

	grain.sand.gfx.canvas.stage.addChild(shape);

	grain.gfx = { shape };
}
