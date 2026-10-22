<script lang="ts">
	import { Button } from '#lib/shadcn/ui/button/index.ts';
	import { cn } from '#lib/shadcn/utils.ts';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import type { ClassValue } from 'svelte/elements';

	type Destination = {
		title: string;
		href: ReturnType<typeof resolve>;
	};
	const destinations: Array<Destination> = [
		{ title: 'Production', href: resolve('/production') },
		{ title: 'Maintenance', href: resolve('/maintenance') }
	];

	const dimensions: ClassValue = 'w-full px-12 py-8 text-md';
</script>

<div class="grid w-56 grid-cols-1 items-start justify-start gap-4">
	{#each destinations as destination (destination)}
		<Button class={cn(dimensions)} onclick={() => goto(destination.href)}>
			{destination.title}
		</Button>
	{/each}
</div>
