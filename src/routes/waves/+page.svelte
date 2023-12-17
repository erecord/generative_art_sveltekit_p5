<script lang="ts">
	import type p5 from 'p5';
	import { initP5 } from '$lib/p5_utils';
	import { onMount } from 'svelte';

	let step = 20;
	let amplitude = 5;
	// TODO convert to pagemodel
	$: invalidateSketch && invalidateSketch(amplitude, heightCutOff, useTriangularMode);
	let color = '#116195';
	let heightCutOff = 5;
	let useTriangularMode = false;
	let lines: p5.Vector[][];

	let invalidateSketch: (...args: Array<number | boolean>) => void;

	let color1: p5.Color; // Dark blue
	let color2: p5.Color; // Light blue

	// Define the hue and saturation for the pastel color
	let hue = 200; // Adjust the hue value (0-360)
	let saturation = 80; // Adjust the saturation value (0-100)

	function onSetup(p: p5) {
		invalidateSketch = (x, y, z) => {
			console.log(x);
			console.log(z);

			lines = createLines(p);
		};

		color1 = p.color(0, 0, 0); // Dark blue
		color2 = p.color(0, 160, 100); // Light blue

		heightCutOff = 7;

		p.stroke(255);
		p.fill(0);
		lines = createLines(p);
		// drawScene(p);
	}

	function onDraw(p: p5) {
		drawScene(p);
	}

	function onResize(p: p5) {
		lines = createLines(p);
		drawScene(p);
	}

	function drawScene(p: p5) {
		p.background(0);

		p.strokeWeight(2);

		p.text(p.frameRate().toPrecision(3), 20, 20);

		drawLines(p, lines);
	}

	function createLines(p: p5): Array<Array<p5.Vector>> {
		let lines = [];

		for (let i = step; i <= p.height; i += step) {
			let line = [];

			let amp = p.map(amplitude, 1, 10, 0.02, 0.001);

			let heightCut = p.map(heightCutOff, 1, 10, 1.5, 0.55);
			let heightCut2 = p.map(heightCutOff, 1, 10, 0.4, 0);

			let startEndCutOff = (i * (heightCut * p.width)) / p.height;
			let startEndCutOff2 = heightCut2 * p.width;
			let amplitudeScale = amp * p.width;

			let cutOffMode = useTriangularMode ? startEndCutOff : startEndCutOff2;

			for (let j = step; j <= p.width - step; j += step) {
				let distanceToCenter = Math.abs(j - p.width / 2);
				let variance = Math.max(p.width / 2 - cutOffMode - distanceToCenter, 0);
				let random = ((Math.random() * variance) / amplitudeScale) * -1;
				let point = p.createVector(j, i + random);

				line.push(point);
			}

			lines.push(line);
		}

		return lines;
	}

	// TODO explore using monad to hide 'p'.
	function drawLines(p: p5, lines: Array<Array<p5.Vector>>) {
		for (let i = 7; i < lines.length; i++) {
			const currentLine = lines[i];

			p.beginShape();

			p.vertex(currentLine[0].x, currentLine[0].y);

			for (let j = 1; j < currentLine.length - 1; j++) {
				const x1 = currentLine[j].x;
				const y1 = currentLine[j].y;
				const x2 = (currentLine[j].x + currentLine[j + 1].x) / 2;
				const y2 = (currentLine[j].y + currentLine[j + 1].y) / 2;
				p.quadraticVertex(x1, y1, x2, y2);
			}

			p.endShape();
		}
	}

	onMount(() => {
		initP5('sketch', onSetup, onDraw, onResize);
	});
</script>

<div class="flex gap-5">
	<div class="">
		<label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900"
			>Amplitude
		</label>
		<input
			id="minmax-range "
			type="range"
			min="1"
			max="10"
			bind:value={amplitude}
			class="w-80 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
		/>
	</div>

	<div class="">
		<label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900">Cut off</label>
		<input
			id="minmax-range "
			type="range"
			min="1"
			max="10"
			bind:value={heightCutOff}
			class="w-80 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
		/>
	</div>
</div>
<!-- <div class="flex justify-center space-x-2">
	<input id="nativeColorPicker1" type="color" bind:value={color} />
</div> -->

<div class="flex items-center">
	<input
		id="checked-checkbox"
		type="checkbox"
		bind:checked={useTriangularMode}
		class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
	/>
	<label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-">Triangular Mode</label>
</div>
<div id="sketch"></div>
