type ClientPosition = {
	x: number;
	y: number;
};

export function addEventListenerHoldMouseDown(
	callback: (mousePosition: ClientPosition) => void,
	ratePerSecond: number = 15
) {
	let intervalId: null | number = null;
	const mousePosition: ClientPosition = { x: 0, y: 0 };

	function start() {
		callback(mousePosition);
		intervalId = setInterval(() => {
			callback(mousePosition);
		}, 1000 / ratePerSecond);
	}

	function stop() {
		clearInterval(intervalId);
	}

	function onMouseMove(event: WindowEventMap["mousemove"]) {
		mousePosition.x = event.clientX;
		mousePosition.y = event.clientY;
	}

	function onMouseDown(event: WindowEventMap["mousedown"]) {
		mousePosition.x = event.clientX;
		mousePosition.y = event.clientY;

		start();

		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mouseup", onMouseUp);
		window.removeEventListener("mousedown", onMouseDown);
	}

	function onMouseUp() {
		stop();

		window.addEventListener("mousedown", onMouseDown);
		window.removeEventListener("mousemove", onMouseMove);
		window.removeEventListener("mouseup", onMouseUp);
	}

	window.addEventListener("mousedown", onMouseDown);

	function removeEventListenerHoldMouseDown() {
		window.removeEventListener("mousedown", onMouseDown);
	}

	return removeEventListenerHoldMouseDown;
}
