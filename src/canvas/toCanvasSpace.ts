import { GridPosition } from "../grid/position/position";
import { Grid } from "../grid/grid";
import { CanvasPosition } from "./position/position";

export function gridToCanvasSpace(
	{ x, y }: GridPosition,
	grid: Grid
): CanvasPosition {
	return { x: x * grid.gfx.sizeCell, y: y * grid.gfx.sizeCell };
}
