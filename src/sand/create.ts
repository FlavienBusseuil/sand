import { Grid } from "../grid/grid";
import { Sand } from "./sand";

export function createSandIntoGrid(grid: Grid): Sand {
	return {
		grains: [],
		grid,
		gfx: {
			canvas: grid.gfx.canvas,
		},
	};
}
