import { updateGfxForSand } from "../sand/updateGfx";
import { createGrid } from "../grid/create";
import { createSandIntoGrid } from "../sand/create";
import { applyPhysicsToSand } from "../sand/applyPhysics";
import { createGrainInSandAtCanvasPosition } from "../sand/createGrainInSandAtCanvasPosition";
import { CanvasPosition } from "../canvas/position/position";
import { addEventListenerHoldMouseDown } from "../mouse/addEventListenerHoldMouseDown";
import { hslColor } from "../color/hslColor";
import { createParticlesInCircleAt } from "../brush/createParticlesInCircleAt";
import { createGrainInSandAt } from "../sand/createGrainAt";
import { canvasToGridSpace } from "../grid/position/toGridSpace";

let i = 0;

function cleanUpForHRM() {
	[...document.body.children].forEach((child) => child.remove());
}

export async function init() {
	cleanUpForHRM();
	const grid = await createGrid(500, 500, {
		sizeCell: 1,
		// displayDebugGfx: true,
	});
	const sand = createSandIntoGrid(grid);

	grid.gfx.canvas.ticker.add(() => {
		applyPhysicsToSand(sand);
		updateGfxForSand(sand);
	});

	addEventListenerHoldMouseDown(({ x, y }) => {
		const mousePositionInCanvas: CanvasPosition = {
			x: x - grid.gfx.canvas.canvas.offsetTop,
			y: y - grid.gfx.canvas.canvas.offsetLeft,
		};
		const mousePositionInGrid = canvasToGridSpace(mousePositionInCanvas, grid);

		i = (i + 1) % 360;

		createParticlesInCircleAt(mousePositionInGrid, 10, (position) =>
			createGrainInSandAt(position, sand, {
				grainColor: hslColor(i),
			})
		);
	});
}
