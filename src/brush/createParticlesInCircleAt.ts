import { GridPosition } from "../grid/position/position";

type Options = { isFilled?: boolean };

export function createParticlesInCircleAt(
	center: GridPosition,
	radius: number,
	createParticuleAt: (position: GridPosition) => void,
	{ isFilled = true }: Options = {}
) {
	let x = 0;
	let y = -radius,
		p = -radius;
	while (x < -y) {
		if (p > 0) {
			y += 1;
			p += 2 * (x + y) + 1;
		} else {
			p += 2 * x + 1;
		}

		createParticuleAt({ x: center.x + x, y: center.y + y });
		createParticuleAt({ x: center.x - x, y: center.y - y });
		createParticuleAt({ x: center.x - x, y: center.y + y });
		createParticuleAt({ x: center.x + x, y: center.y - y });
		createParticuleAt({ x: center.x + y, y: center.y + x });
		createParticuleAt({ x: center.x - y, y: center.y - x });
		createParticuleAt({ x: center.x - y, y: center.y + x });
		createParticuleAt({ x: center.x + y, y: center.y - x });

		if (isFilled) {
			for (let hx = center.x - x + 1; hx < center.x + x; hx++) {
				createParticuleAt({ x: hx, y: center.y + y });
				createParticuleAt({ x: hx, y: center.y - y });
			}
			for (let hx = center.x + y + 1; hx < center.x - y; hx++) {
				createParticuleAt({ x: hx, y: center.y + x });
				createParticuleAt({ x: hx, y: center.y - x });
			}
		}

		x += 1;
	}
}
