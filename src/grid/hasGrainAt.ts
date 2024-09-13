import { Grid } from "./grid";
import { isPositionInsideGrid } from "./isPositionInsideGrid";
import { GridPosition } from "./position/position";

export function hasGrainInGridAt(grid: Grid, position: GridPosition) {
	if (!isPositionInsideGrid(position, grid)) {
		return false;
	}

	return grid.cells[position.x][position.y] !== null;
}
