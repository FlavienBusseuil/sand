import { hasGrainInGridAt } from "../grid/hasGrainAt";
import { GridPosition } from "../grid/position/position";
import { Sand } from "./sand";

export function hasGrainInSandAt(sand: Sand, position: GridPosition) {
	return hasGrainInGridAt(sand.grid, position);
	// return sand.grains.find((grain) => samePositions(grain.position, position));
}
