import { attachGfxToGrid, Options as GfxOptions } from "./attachGfx";
import { Grid } from "./grid";

type Options = GfxOptions;

export async function createGrid(
	lengthX: number = 300,
	lengthY: number = 300,
	gfxOptions: Options = {}
): Promise<Grid> {
	const grid: Grid = {
		lengthX,
		lengthY,
		cells: Array(lengthX)
			.fill(null)
			.map(() => Array(lengthY).fill(null)),
	};

	await attachGfxToGrid(grid, gfxOptions);

	return grid;
}
