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
import { addEventListenerMouseScroll } from "../mouse/addEventListenerMouseScroll";

function cleanUpForHRM() {
	[...document.body.children].forEach((child) => child.remove());
}

export async function init() {
	let hueDegree = 0;
	let brushSize = 5;

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

	addEventListenerMouseScroll((scrollDelta) => {
		brushSize += Math.trunc(scrollDelta * -0.01);
		brushSize = Math.min(Math.max(1, brushSize), 20);
	});

	addEventListenerHoldMouseDown(({ x, y }) => {
		const mousePositionInCanvas: CanvasPosition = {
			x: x - grid.gfx.canvas.canvas.offsetTop,
			y: y - grid.gfx.canvas.canvas.offsetLeft,
		};
		const mousePositionInGrid = canvasToGridSpace(mousePositionInCanvas, grid);

		hueDegree = (hueDegree + 1) % 360;

		createParticlesInCircleAt(mousePositionInGrid, brushSize, (position) =>
			createGrainInSandAt(position, sand, {
				grainColor: hslColor(hueDegree),
			})
		);
	});
}
