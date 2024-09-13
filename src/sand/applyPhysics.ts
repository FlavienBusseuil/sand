import { moveDown } from "../grain/moveDown";
import { moveLeft } from "../grain/moveLeft";
import { moveRight } from "../grain/moveRight";
import { isPositionOnTheBottomEdgeOfGrid } from "../grid/isPositionOnTheBottomEdge";
import { isPositionOnTheLeftEdgeOfGrid } from "../grid/isPositionOnTheLeftEdge";
import { isPositionOnTheRightEdgeOfGrid } from "../grid/isPositionOnTheRightEdge";
import { hasGrainInSandAt } from "./hasGrainAt";
import { doesGrainOnTopOfAnotherInSand } from "./hasGrainUnderneath";
import { Sand } from "./sand";

export function applyPhysicsToSand(sand: Sand) {
	return sand.grains.forEach((grain) => {
		if (isPositionOnTheBottomEdgeOfGrid(grain.position, sand.grid)) {
			return;
		}

		if (doesGrainOnTopOfAnotherInSand(grain, sand)) {
			const isTryingRightSide = Boolean(Math.round(Math.random()));

			if (isTryingRightSide) {
				const bottomRightPosition = {
					x: grain.position.x + 1,
					y: grain.position.y + 1,
				};
				if (!hasGrainInSandAt(sand, bottomRightPosition)) {
					if (isPositionOnTheRightEdgeOfGrid(grain.position, sand.grid)) {
						return;
					}
					moveRight(grain);
					moveDown(grain);
					return;
				}
			}

			const bottomLeftPosition = {
				x: grain.position.x - 1,
				y: grain.position.y + 1,
			};
			if (!hasGrainInSandAt(sand, bottomLeftPosition)) {
				if (isPositionOnTheLeftEdgeOfGrid(grain.position, sand.grid)) {
					return;
				}
				moveLeft(grain);
				moveDown(grain);
				return;
			}

			return;
		}

		moveDown(grain);
	});
}
