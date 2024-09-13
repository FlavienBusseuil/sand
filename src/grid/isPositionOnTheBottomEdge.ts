import { Grid } from "./grid";
import { GridPosition } from "./position/position";

export function isPositionOnTheBottomEdgeOfGrid(
	position: GridPosition,
	grid: Grid
) {
	if (position.y === grid.lengthY - 1) {
		return true;
	}

	return false;
}
