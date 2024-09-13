import { GridPosition } from "../grid/position/position";
import { Sand } from "../sand/sand";
import { Grain } from "./grain";

export function createGrain(position: GridPosition, sand: Sand): Grain {
	return {
		position,
		sand,
	};
}
