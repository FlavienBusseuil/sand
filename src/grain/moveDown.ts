import { Grain } from "./grain";

export function moveDown(grain: Grain) {
	grain.sand.grid.cells[grain.position.x][grain.position.y] = null;
	grain.sand.grid.cells[grain.position.x][grain.position.y + 1] = grain;

	grain.position.y = grain.position.y + 1;
}
