import { Grain } from "../grain/grain";
import { Grid } from "./grid";

export function addGrainToGrid(grain: Grain, grid: Grid) {
	grid.cells[grain.position.x][grain.position.y] = grain;
}
