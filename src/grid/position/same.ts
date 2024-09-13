import { GridPosition } from "./position";

export function samePositions(
	position1: GridPosition,
	position2: GridPosition
) {
	return position1.x === position2.x && position1.y === position2.y;
}
