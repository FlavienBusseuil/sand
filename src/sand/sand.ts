import { Canvas } from "../canvas/canvas";
import { Grain } from "../grain/grain";
import { Grid } from "../grid/grid";

export type Sand = {
	grains: Grain[];
	grid: Grid;
	gfx?: {
		canvas: Canvas;
	};
};
