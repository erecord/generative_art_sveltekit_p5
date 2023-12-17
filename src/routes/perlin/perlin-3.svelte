<script lang="ts">
	import { initP5 } from '$lib/p5_utils';
	import type p5 from 'p5';
	import { onDestroy, onMount } from 'svelte';
	let modifier: number = 1;
	let isPaused = false;

	$: `${modifier}${isPaused}` && invalidateSketch && invalidateSketch();

	let invalidateSketch: () => void;

	function setup(p: p5) {
		invalidateSketch = () => {
			draw(p);
		};
	}

	let xOff = 0;

	function draw(p: p5) {
		p.background(200);

		p.text(p.frameRate().toFixed(0), 10, 10, 50, 50);
		p.text('Sampling 1D Perlin Noise', p.width - 300, 10, 300, 50);

		let noiseInput: number;

		switch (modifier) {
			case 1:
			case 2:
			case 3:
				noiseInput = p.map(modifier, 1, 10, 0.000005, 0.0002);
				break;
			case 4:
			case 5:
			case 6:
				noiseInput = p.map(modifier, 1, 10, 0.000005, 0.002);
				break;
			case 7:
				noiseInput = p.map(modifier, 1, 10, 0.005, 0.002);
				break;
			case 8:
				noiseInput = p.map(modifier, 1, 10, 0.05, 0.002);
				break;
			case 9:
				noiseInput = p.map(modifier, 1, 10, 0.5, 0.02);
				break;
			case 10:
				noiseInput = p.map(modifier, 1, 10, 0.005, 0.2);
				break;
			default:
				noiseInput = 0;
				break;
		}

		p.push();
		p.noFill();
		p.beginShape();
		for (let x = 0; x < p.width; x++) {
			const y = p.map(p.noise(xOff), 0, 1, 0, p.height);
			p.vertex(x, y);
			xOff = xOff + noiseInput;
		}
		p.endShape();
		p.pop();

		if (isPaused) {
			p.noLoop();
		} else {
			p.loop();
		}
	}

	function onResize(p: p5) {
		// image && onImage(p);
	}

	let p: p5 | null;
	onMount(() => {
		if (p == null) {
			p = initP5('sketch', setup, draw, onResize);
		}
	});

	onDestroy(() => {
		p = null;
	});
</script>

<div class="flex gap-5">
	<div class="">
		<label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900"
			>Modifier ({modifier})
		</label>
		<input
			id="minmax-range "
			type="range"
			min="1"
			max="10"
			bind:value={modifier}
			class="w-80 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
		/>
	</div>
	<div class="">
		<label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900">Pause </label>
		<input id="" type="checkbox" bind:checked={isPaused} class="" />
	</div>
</div>

<div id="sketch"></div>
