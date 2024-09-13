import { ColorSource } from "pixi.js";
import { defaultGrainColor } from "../grain/attachGfx";
import { canvasToGridSpace } from "../grid/position/toGridSpace";
import { createGrainInSandAt } from "./createGrainAt";
import { Sand } from "./sand";
import { CanvasPosition } from "../canvas/position/position";

type Options = {
	size?: number;
	grainColor?: ColorSource;
};

export function addMasseGrainToSandAtCanvasPosition(
	position: CanvasPosition,
	sand: Sand,
	{ size = 5, grainColor = defaultGrainColor }: Options = {}
) {
	const centralGridPosition = canvasToGridSpace(position, sand.grid);
	for (let x = size; x >= -size; x = x - 2) {
		for (let y = size; y >= -size; y = y - 2) {
			createGrainInSandAt(
				{ x: centralGridPosition.x + x, y: centralGridPosition.y + y },
				sand,
				{ grainColor }
			);
		}
	}
}
