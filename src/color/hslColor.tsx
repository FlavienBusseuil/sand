export function hslColor(
	hueDeg: number,
	saturationPercent = 50,
	lightnessPercent = 50
) {
	return `hsl(${hueDeg % 360}deg ${saturationPercent}% ${lightnessPercent}%)`;
}
