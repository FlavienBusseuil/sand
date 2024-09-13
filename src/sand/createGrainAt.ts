import { ColorSource } from "pixi.js";
import { attachGfxToGrain, defaultGrainColor } from "../grain/attachGfx";
import { createGrain } from "../grain/create";
import { isPositionInsideGrid } from "../grid/isPositionInsideGrid";
import { GridPosition } from "../grid/position/position";
import { hasGrainInSandAt } from "./hasGrainAt";
import { Sand } from "./sand";
import { addGrainToGrid } from "../grid/addGrain";

type Options = {
	grainColor?: ColorSource;
};

export function createGrainInSandAt(
	position: GridPosition,
	sand: Sand,
	{ grainColor = defaultGrainColor }: Options = {}
) {
	if (hasGrainInSandAt(sand, position)) {
		return;
	}

	if (!isPositionInsideGrid(position, sand.grid)) {
		return;
	}

	const grain = createGrain(position, sand);
	attachGfxToGrain(grain, { grainColor });
	sand.grains.push(grain);
	addGrainToGrid(grain, sand.grid);
}
