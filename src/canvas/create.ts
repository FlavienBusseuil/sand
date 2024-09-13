import { Application } from "pixi.js";
import { Canvas } from "./canvas";

export async function createCanvas(
	width: number,
	height: number,
	domElement: HTMLElement
): Promise<Canvas> {
	const app = new Application();
	await app.init({
		width,
		height,
		backgroundColor: 0x000000,
	});

	domElement.appendChild(app.canvas);

	return app;
}
