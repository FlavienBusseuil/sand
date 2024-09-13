import { updateGfxForGrain } from "../grain/updateGfx";
import { Sand } from "./sand";

export function updateGfxForSand(sand: Sand) {
	sand.grains.forEach((grain) => updateGfxForGrain(grain));
}
