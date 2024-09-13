import { Grid } from "./grid";
import { GridPosition } from "./position/position";

export function isPositionInsideGrid(position: GridPosition, grid: Grid) {
	if (position.x < 0 || position.y < 0) {
		return false;
	}

	if (position.x >= grid.lengthX || position.y >= grid.lengthY) {
		return false;
	}

	return true;
}
