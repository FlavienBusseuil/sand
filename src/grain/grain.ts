import { Graphics } from "pixi.js";
import { GridPosition } from "../grid/position/position";
import { Sand } from "../sand/sand";

export type Grain = {
	position: GridPosition;
	sand: Sand;
	gfx?: {
		shape: Graphics;
	};
};
