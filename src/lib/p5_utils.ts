import p5 from 'p5';
const shouldUseSquaredRatio = false;
const FPS = 60;
const SCALE_FACTOR = 1;

const getViewportWidth = (): number => {
	return innerWidth / SCALE_FACTOR;
};

const getViewportHeight = (): number => {
	return shouldUseSquaredRatio ? getViewportWidth() : innerHeight / SCALE_FACTOR;
};

export const initP5 = (
	sketchId: string,
	onSetup: (p: p5) => void,
	onDraw: (p: p5) => void,
	onResize: (p: p5) => void
): p5 => {
	const p5SketchElement = document.getElementById(sketchId)!;
	let width = getViewportWidth();
	let height = getViewportHeight();

	return new p5((p: p5) => {
		p.setup = () => {
			const dpr = window.devicePixelRatio;

			p.scale(dpr, dpr);
			p.createCanvas(width, height);
			p.frameRate(FPS);
			onSetup(p);
		};
		p.draw = () => {
			onDraw(p);
		};
		p.windowResized = () => {
			width = getViewportWidth();
			height = getViewportHeight();

			p.resizeCanvas(width, height);
			onResize(p);
		};
	}, p5SketchElement);
};
