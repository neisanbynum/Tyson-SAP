<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import * as Breadcrumb from '#lib/shadcn/ui/breadcrumb/index.ts';
	import toTitleCase from 'titlecase';
	import type { RouteArray } from '../utils';
	import type { ResolvedPathname } from '$app/types';

	const curr: ResolvedPathname = $derived(page.url.pathname) as ResolvedPathname;
	const segments = $derived(
		page.url.pathname
			.slice(1)
			.split('/')
			.filter((segment) => segment !== '')
	);

	const Unauthenticated: RouteArray = ['/authentication'];
	const Authenticated: RouteArray = ['/dashboard', '/maintenance', '/production'];
</script>

<Breadcrumb.Root>
	<Breadcrumb.List>
		{#if curr === '/' || Unauthenticated.find((route) => curr.startsWith(route))}
			<Breadcrumb.Item>
				<Breadcrumb.Link href={resolve('/')}>Home</Breadcrumb.Link>
			</Breadcrumb.Item>
			{#each segments as segment, index (`${segment}-${index}`)}
				{#if segments.length >= 1}
					<Breadcrumb.Separator />
				{/if}
				<Breadcrumb.Item>
					<Breadcrumb.Link href={`/${segments.slice(0, index + 1).join('/')}`}>
						{toTitleCase(segment.replace('-', ' '))}
					</Breadcrumb.Link>
				</Breadcrumb.Item>
			{/each}
		{:else if Authenticated.find((route) => curr.startsWith(route))?.at(0)}
			{#if curr !== resolve('/dashboard')}
				<Breadcrumb.Item>
					<Breadcrumb.Link href={resolve('/dashboard')}>Dashboard</Breadcrumb.Link>
				</Breadcrumb.Item>
			{/if}
			{#each segments as segment, index (`${segment}-${index}`)}
				{#if segments.length !== 1 || !curr.startsWith(resolve('/dashboard'))}
					<Breadcrumb.Separator />
				{/if}
				<Breadcrumb.Item>
					<Breadcrumb.Link href={`/${segments.slice(0, index + 1).join('/')}`}>
						{toTitleCase(segment.replace('-', ' '))}
					</Breadcrumb.Link>
				</Breadcrumb.Item>
			{/each}
		{/if}
	</Breadcrumb.List>
</Breadcrumb.Root>
