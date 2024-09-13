import { hydrate, prerender as ssr } from "preact-iso";
import { updateGfxForSand } from "./sand/updateGfx";
import { createGrid } from "./grid/create";
import { createSandIntoGrid } from "./sand/create";
import { applyPhysicsToSand } from "./sand/applyPhysics";
import { createGrainInSandAtCanvasPosition } from "./sand/createGrainInSandAtCanvasPosition";
import { CanvasPosition } from "./canvas/position/position";
import { Sand } from "./sand/sand";
import { addMasseGrainToSandAtCanvasPosition } from "./sand/createMasseGrainInSandAtCanvasPosition";

let interval: null | number = null;
let mousePosition: CanvasPosition = { x: 0, y: 0 };
const brushSize = 10;
let i = 0;

function grainColor(i: number) {
	return `hsl(${i % 360}deg 50% 50%)`;
}

function startAddingGrainToSandAtMousePosition(sand: Sand) {
	const ratePerSecond = 60;
	addMasseGrainToSandAtCanvasPosition(mousePosition, sand, {
		grainColor: grainColor(i),
	});
	interval = setInterval(() => {
		i = (i + 1) % 360;
		addMasseGrainToSandAtCanvasPosition(mousePosition, sand, {
			grainColor: grainColor(i),
		});
	}, 1000 / ratePerSecond);
}

function stopAddingGrainToSandAtMousePosition() {
	clearInterval(interval);
}

function cleanUpForHRM() {
	[...document.body.children].forEach((child) => child.remove());
}

async function init() {
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

	const onMouseMove = (event: WindowEventMap["mousemove"]) => {
		mousePosition = {
			x: event.clientX - grid.gfx.canvas.canvas.offsetTop,
			y: event.clientY - grid.gfx.canvas.canvas.offsetLeft,
		};
	};
	const onMouseDown = (event: WindowEventMap["mousedown"]) => {
		mousePosition = {
			x: event.clientX - grid.gfx.canvas.canvas.offsetTop,
			y: event.clientY - grid.gfx.canvas.canvas.offsetLeft,
		};
		startAddingGrainToSandAtMousePosition(sand);

		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mouseup", onMouseUp);
		window.removeEventListener("mousedown", onMouseDown);
	};
	const onMouseUp = () => {
		stopAddingGrainToSandAtMousePosition();

		window.addEventListener("mousedown", onMouseDown);
		window.removeEventListener("mousemove", onMouseMove);
		window.removeEventListener("mouseup", onMouseUp);
	};

	window.addEventListener("mousedown", onMouseDown);
}

init();

export function App() {
	return <></>;
}

if (typeof window !== "undefined") {
	hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
