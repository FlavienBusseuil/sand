import { Grid } from "./grid";
import { GridPosition } from "./position/position";

export function isPositionOnTheRightEdgeOfGrid(
	position: GridPosition,
	grid: Grid
) {
	if (position.x === grid.lengthX - 1) {
		return true;
	}

	return false;
}
