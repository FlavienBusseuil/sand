import { Grain } from "../grain/grain";
import { hasGrainInSandAt } from "./hasGrainAt";
import { Sand } from "./sand";

export function doesGrainOnTopOfAnotherInSand(grain: Grain, sand: Sand) {
	return hasGrainInSandAt(sand, {
		x: grain.position.x,
		y: grain.position.y + 1,
	});
}
