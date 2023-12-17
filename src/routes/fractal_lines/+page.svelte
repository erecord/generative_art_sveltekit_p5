<script lang="ts">
	import { onMount } from 'svelte';
	import { initP5 } from '$lib/p5_utils';
	import type p5 from 'p5';
	let step = 400;
	let previousStep = 0;

	let lines: Array<p5.Vector> = [];

	function onSetup(p: p5) {
		p.randomSeed(10);
		lines = createLines(p);
	}
	function onDraw(p: p5) {
		if (step != previousStep) {
			console.log('Drawing...');

			previousStep = step;
			lines = createLines(p);

			p.background(255);
			p.stroke(0);

			// p.background(0);
			// p.stroke(255);

			p.beginShape(p.LINES);

			lines.forEach((v) => p.vertex(v.x, v.y));

			p.endShape();
		}
	}

	function createLines(p: p5) {
		let lines = [];
		for (let x = 0; x < p.width; x += step) {
			for (let y = 0; y < p.width; y += step) {
				const leftToRight = Math.random() > 0.5;

				if (leftToRight) {
					lines.push(p.createVector(x, y), p.createVector(x + step, y + step));
				} else {
					lines.push(p.createVector(x + step, y), p.createVector(x, y + step));
				}
			}
		}
		return lines;
	}

	function onDecrement() {
		let decrement = 50;

		if (step < 60) {
			decrement = 5;
		}

		step = Math.max(15, step - decrement);
	}

	function onIncrement() {
		let decrement = 50;

		if (step < 60) {
			decrement = 5;
		}
		step = Math.min(400, step + decrement);
	}

	onMount(() => {
		initP5('sketch', onSetup, onDraw, (p) => {});
	});
</script>

<div class="flex items-center gap-2">
	{#if step > 15}
		<button
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
			on:click={onDecrement}>-</button
		>
	{:else}
		<button
			class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
		>
			-
		</button>
	{/if}

	{#if step < 400}
		<button
			class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
			on:click={onIncrement}>+</button
		>
	{:else}
		<button
			class="bg-transparent text-blue-700 border-blue-500 font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
		>
			+
		</button>
	{/if}
	<p class="text-md">Zoom: {step}</p>
</div>

<div id="sketch"></div>
