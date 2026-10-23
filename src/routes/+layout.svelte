<script lang="ts">
	import './layout.css';
	import logo from "#lib/assets/tyson-foods.svg"
	import type { LayoutProps } from './$types';
	import { ScrollArea } from '#lib/shadcn/ui/scroll-area/index.ts';
	import NavHistory from '#lib/components/nav-history.svelte';
	import { ModeWatcher } from "mode-watcher"
	import ThemeToggle from '#lib/components/theme-toggle.svelte';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<title>Tyson SAP</title>
	<link rel="icon" href={logo} />
</svelte:head>

<ModeWatcher />
<div id="navbar" class="flex justify-between items-center rounded-md border-2 px-4 py-2 shadow-md">
	<NavHistory />
	<ThemeToggle />
</div>
<ScrollArea class="h-full min-h-0 w-full rounded-md border-2 p-4 gap-4 shadow-md">
	{@render children()}
</ScrollArea>
