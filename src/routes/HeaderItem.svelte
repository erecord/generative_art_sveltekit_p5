<script lang="ts">
	import { page } from '$app/stores';
	export let name: string;
</script>

<li aria-current={$page.url.pathname.startsWith(`/${name}`) ? 'page' : undefined}>
	<a href={`/${name}`}>{name}</a>
</li>

<style>
	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
