export function addEventListenerMouseScroll(
	callback: (scrollDelta: number) => void
) {
	function onMouseScroll(event: WindowEventMap["wheel"]) {
		callback(event.deltaY);
	}

	window.addEventListener("wheel", onMouseScroll);

	return () => window.removeEventListener("wheel", onMouseScroll);
}
