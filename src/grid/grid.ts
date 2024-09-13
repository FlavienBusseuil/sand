import { Graphics } from "pixi.js";
import { Grain } from "../grain/grain";
import { Canvas } from "../canvas/canvas";

export type Grid = {
	lengthX: number;
	lengthY: number;
	cells: Array<Array<Grain | null>>;
	gfx?: {
		canvas: Canvas;
		shape: Graphics;
		sizeCell: number;
	};
};
