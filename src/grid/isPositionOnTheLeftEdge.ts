import { Grid } from "./grid";
import { GridPosition } from "./position/position";

export function isPositionOnTheLeftEdgeOfGrid(
	position: GridPosition,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	grid: Grid
) {
	if (position.x === 0) {
		return true;
	}

	return false;
}
