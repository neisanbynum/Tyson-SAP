<script lang="ts">
	import Button from '#lib/shadcn/ui/button/button.svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
</script>

<h2>Application Home Page</h2>
<Button onclick={() => goto(resolve('/authentication'))}>Authenticate</Button>
<Button onclick={() => goto(resolve('/dashboard'))}>Dashboard</Button>
