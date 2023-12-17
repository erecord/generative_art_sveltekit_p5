<script lang="ts">
	import { initP5 } from '$lib/p5_utils';
	import type p5 from 'p5';
	import { onDestroy, onMount } from 'svelte';

	let inc = 0.003;
	let xOff = 0;
	let start = 0;
	let sampleOffset = 5;
	let modifier: number = 4;
	let showGraph = false;
	let shouldAdjustXOffStart = true;
	let rateOfChange = 1;

	$: `${modifier}${showGraph}${shouldAdjustXOffStart}${sampleOffset}${rateOfChange}` &&
		invalidateSketch &&
		invalidateSketch();

	let invalidateSketch: () => void;

	function setup(p: p5) {
		invalidateSketch = () => {
			draw(p);
		};
	}

	function draw(p: p5) {
		p.background(200);
		p.text(p.frameRate().toFixed(0), 10, 10, 50, 50);
		p.text('Sampling 1D Perlin Noise', p.width - 300, 10, 300, 50);

		switch (modifier) {
			case 1:
			case 2:
			case 3:
				inc = p.map(modifier, 1, 10, 0.000005, 0.0002);
				break;
			case 4:
			case 5:
			case 6:
				inc = p.map(modifier, 1, 10, 0.000005, 0.002);
				break;
			case 7:
				inc = p.map(modifier, 1, 10, 0.005, 0.002);
				break;
			case 8:
				inc = p.map(modifier, 1, 10, 0.05, 0.002);
				break;
			case 9:
				inc = p.map(modifier, 1, 10, 0.5, 0.02);
				break;
			case 10:
				inc = p.map(modifier, 1, 10, 0.005, 0.2);
				break;
			default:
				inc = 0;
				break;
		}

		if (shouldAdjustXOffStart) {
			xOff = start;
		}

		const sampleOffsetScaled = p.map(sampleOffset, 1, 10, 40, p.width - 40);
		const y = p.map(p.noise(xOff + inc * sampleOffsetScaled), 0, 1, 0, p.height);
		p.rect(sampleOffsetScaled - 15, y - 100, 40, 40);

		if (showGraph) {
			p.push();
			p.fill(255);
			p.stroke(255, 30, 30);
			p.strokeWeight(8);
			p.point(sampleOffsetScaled, y);
			p.pop();
		}
		p.push();
		p.noFill();
		p.beginShape();

		for (let x = 0; x < p.width; x++) {
			if (showGraph) {
				// const y = p.map(p.random(1), 0, 1, 0, p.height);
				const y = p.map(p.noise(xOff), 0, 1, 0, p.height);
				p.vertex(x, y);
			}

			xOff += inc;
		}
		p.endShape();
		p.pop();

		if (rateOfChange != 0) {
			let roc = p.map(rateOfChange, -5, 5, -0.04, 0.04);
			start += roc;
		}

		if (rateOfChange == 0) {
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
		<label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900">Show Graph</label
		>
		<input id="" type="checkbox" bind:checked={showGraph} class="" />
	</div>

	<div class="">
		<label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900"
			>Adjust Offset Start</label
		>
		<input id="" type="checkbox" bind:checked={shouldAdjustXOffStart} class="" />
	</div>

	<div class="flex flex-col">
		<div class="">
			<label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900"
				>Sample Position ({sampleOffset})
			</label>
			<input
				id="minmax-range "
				type="range"
				min="1"
				max="10"
				bind:value={sampleOffset}
				class="w-80 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
			/>
		</div>

		<div class="">
			<label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900"
				>Speed ({rateOfChange})
			</label>
			<input
				id="minmax-range "
				type="range"
				min="-5"
				max="5"
				bind:value={rateOfChange}
				class="w-80 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
			/>
		</div>
	</div>
</div>

<div id="sketch"></div>
