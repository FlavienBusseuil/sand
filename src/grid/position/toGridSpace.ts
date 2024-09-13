import { GridPosition } from "./position";
import { Grid } from "../grid";
import { CanvasPosition } from "../../canvas/position/position";

export function canvasToGridSpace(
	{ x, y }: CanvasPosition,
	grid: Grid
): GridPosition {
	return {
		x: Math.trunc(x / grid.gfx.sizeCell),
		y: Math.trunc(y / grid.gfx.sizeCell),
	};
}
