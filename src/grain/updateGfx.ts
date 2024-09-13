import { Grain } from "./grain";
import { gridToCanvasSpace } from "../canvas/toCanvasSpace";

export function updateGfxForGrain(grain: Grain) {
	const { x, y } = gridToCanvasSpace(grain.position, grain.sand.grid);
	grain.gfx?.shape.position.set(x, y);
}
