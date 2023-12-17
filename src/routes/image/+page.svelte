<script lang="ts">
	import { initP5 } from '$lib/p5_utils';
	import type p5 from 'p5';
	import { onMount } from 'svelte';
	let image: p5.Image;
	let dotWeight: number = 1;
	let curveWeight: number = 1;

	$: `${dotWeight}${curveWeight}` && invalidateSketch && invalidateSketch();

	let invalidateSketch: () => void;

	function onImage(p: p5) {
		p.background(255);
		let dw = p.map(dotWeight, 1, 10, 5, 30);
		let cw = p.map(curveWeight, 1, 10, 0, 6);

		for (let col = 0; col < image.width; col += 10) {
			for (let row = 0; row < image.height; row += 10) {
				let c = image.get(col, row);
				p.noFill();
				p.stroke(p.color(c));

				p.push();
				p.strokeWeight(p.random(dw));
				p.point(col, row);
				p.pop();

				p.push();
				p.strokeWeight(p.random(cw));
				p.translate(col, row);
				p.rotate(p.radians(p.random(360)));
				p.curve(
					col,
					row,
					p.sin(col) * p.random(60),
					p.cos(col) * p.sin(col) * p.random(90),
					p.random(10),
					p.random(80),
					p.cos(row) * p.sin(row) * p.random(140),
					p.cos(col) * p.sin(col) * 50
				);
				p.pop();
			}
		}
	}

	function onSetup(p: p5) {
		invalidateSketch = () => {
			image && onImage(p);
		};

		p.loadImage(
			'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
			(img) => {
				image = img;
				image.resize(image.width / 1.2, image.height / 1.2);
				onImage(p);
			}
		);
	}

	function onDraw(p: p5) {}

	function onResize(p: p5) {
		image && onImage(p);
	}

	onMount(() => {
		initP5('sketch', onSetup, onDraw, onResize);
	});
</script>

<div class="flex gap-5">
	<div class="">
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
	</div>
</div>

<div id="sketch"></div>
