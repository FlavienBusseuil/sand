import { Grain } from "./grain";

export function moveLeft(grain: Grain) {
	grain.sand.grid.cells[grain.position.x][grain.position.y] = null;
	grain.sand.grid.cells[grain.position.x - 1][grain.position.y] = grain;

	grain.position.x = grain.position.x - 1;
}
