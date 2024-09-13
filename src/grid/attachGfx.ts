import { Graphics } from "pixi.js";
import { Grid } from "./grid";
import { createCanvas } from "../canvas/create";

export type Options = {
	sizeCell?: number;
	displayDebugGfx?: boolean;
};

export async function attachGfxToGrid(
	grid: Grid,
	{ sizeCell = 2, displayDebugGfx = false }: Options = {}
) {
	const maxX = grid.lengthX * sizeCell;
	const maxY = grid.lengthY * sizeCell;
	const canvas = await createCanvas(
		grid.lengthX * sizeCell,
		grid.lengthY * sizeCell,
		document.body
	);

	const graphics = new Graphics();
	if (displayDebugGfx) {
		const color = 0x6dcff6;

		for (let x = 0; x < grid.lengthX + 1; x++) {
			graphics
				.moveTo(x * sizeCell, 0)
				.lineTo(x * sizeCell, maxY)
				.stroke({ color });
		}

		for (let y = 0; y < grid.lengthY + 1; y++) {
			graphics
				.moveTo(0, y * sizeCell)
				.lineTo(maxX, y * sizeCell)
				.stroke({ color });
		}
	}

	grid.gfx = {
		shape: graphics,
		sizeCell,
		canvas,
	};

	canvas.stage.addChild(graphics);
}
