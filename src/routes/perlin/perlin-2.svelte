<script lang="ts">
	import { initP5 } from '$lib/p5_utils';
	import type p5 from 'p5';
	import { onDestroy, onMount } from 'svelte';
	let x: number = 1;

	$: `${x}` && invalidateSketch && invalidateSketch();

	let invalidateSketch: () => void;

	function setup(p: p5) {
		invalidateSketch = () => {
			draw(p);
		};
	}

	let xOff = 0;
	let xOff2 = 10000;

	function draw(p: p5) {
		p.background(200);

		p.text(p.frameRate().toFixed(0), 10, 10, 50, 50);
		p.text('1D Perlin Noise \n(Offset On Second Sample)', p.width - 300, 10, 300, 50);

		const newX = p.map(p.noise(xOff), 0, 1, -600, 200);
		const newY = p.map(p.noise(xOff2), 0, 1, -800, 700);

		p.rect(p.width / 2 + newX, p.height / 2 + newY, 90, 90);

		xOff = xOff + 0.02;
		xOff2 = xOff2 + 0.03;
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
	onDestroy(() => {
		// p = null;
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
	</div> -->
</div>

<div id="sketch"></div>
