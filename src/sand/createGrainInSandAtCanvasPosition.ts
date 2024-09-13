import { ColorSource } from "pixi.js";
import { defaultGrainColor } from "../grain/attachGfx";
import { canvasToGridSpace } from "../grid/position/toGridSpace";
import { createGrainInSandAt } from "./createGrainAt";
import { Sand } from "./sand";
import { CanvasPosition } from "../canvas/position/position";

type Options = {
	grainColor?: ColorSource;
};

export function createGrainInSandAtCanvasPosition(
	position: CanvasPosition,
	sand: Sand,
	{ grainColor = defaultGrainColor }: Options = {}
) {
	const gridPosition = canvasToGridSpace(position, sand.grid);
	createGrainInSandAt(gridPosition, sand, { grainColor });
}
