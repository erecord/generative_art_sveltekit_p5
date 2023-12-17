<script lang="ts">
	import { initP5 } from '$lib/p5_utils';
	import type p5 from 'p5';
	import { onMount } from 'svelte';
	let image: p5.Image;
	let dotWeight: number = 1;
	let curveWeight: number = 1;

	$: `${dotWeight}${curveWeight}` && invalidateSketch && invalidateSketch();

	let invalidateSketch: () => void;

	let noiseLevel = 255;
	let noiseScale = 0.009;

	// let noise: Array<Array<Number>> = [];

	function onImage(p: p5) {}

	function setup(p: p5) {
		invalidateSketch = () => {
			image && onImage(p);
		};

		// for (let y = 0; y < p.height / 3; y += 1) {
		// 	for (let x = 0; x < p.width / 3; x += 1) {
		// 		// Scale input coordinates.
		// 		let nx = noiseScale * x;
		// 		let ny = noiseScale * y;
		// 		let nt = noiseScale * p.frameCount;
		// 		// Compute noise value.
		// 		let c = noiseLevel * p.noise(nx, ny, nt);
		// 		// Render.

		// 		noise[x][y] = c;
		// 	}
		// }
	}

	let xOff = 0;
	let yOff = 0;

	function draw(p: p5) {
		p.background(200);

		p.text(p.frameRate().toFixed(0), 10, 10, 50, 50);

		const n = p.noise(xOff, yOff);

		const newX = p.map(n, 0, 1, -600, 200);
		const newY = p.map(n, 0, 1, -800, 700);

		p.rect(p.width / 2 + newX, p.height / 2, 90, 90);
		p.rect(p.width / 2 + 300, p.height / 2 + newY, 90, 90);

		xOff = xOff + 0.04;
		yOff = yOff + 0.02;

		// Scale input coordinate.
		// let nt = noiseScale * p.frameCount;
		// // Compute noise value.
		// let x = noiseLevel * p.noise(nt);
		// let y = noiseLevel * p.noise(nt + 10000);
		// p.rect(p.width / 2 + x, p.height / 2 - y, 150, 150);

		// for (let x = 0; x < noise.length; x++) {
		// 	p.stroke(i);
		// 	p.point;
		// }
	}

	function onResize(p: p5) {
		// image && onImage(p);
	}

	let p: p5;
	onMount(() => {
		if (p == null) {
			p = initP5('sketch', setup, draw, onResize);
		}
	});
</script>

<div class="flex gap-5">
	<!-- <div class="">
		<label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900"
			>Weight: Dot
		</label>
		<input
			id="minmax-range "
			type="range"
			min="1"
			max="10"
			bind:value={dotWeight}
			class="w-80 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
		/>
	</div>
	<div class="">
		<label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900"
			>Weight: Curves
		</label>
		<input
			id="minmax-range "
			type="range"
			min="1"
			max="10"
			bind:value={curveWeight}
			class="w-80 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
		/>
	</div> -->
</div>

<div id="sketch"></div>
