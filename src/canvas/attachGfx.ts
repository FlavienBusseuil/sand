import { Graphics } from "pixi.js";
import { Canvas } from "./canvas";

export function attachGfxToCanvas(canvas: Canvas) {
	const shape = new Graphics()
		.rect(0, 0, canvas.canvas.width - 1, canvas.canvas.height - 1)
		.stroke({ width: 1, color: 0x000000 })
		.fill({ alpha: 0 });

	canvas.stage.addChild(shape);
}
