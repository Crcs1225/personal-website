<script lang="ts">
	import ContactLink from '$lib/components/ui/ContactLink.svelte';
	import type { ContactLink as ContactLinkItem } from '$lib/types/portfolio';

	export let name: string;
	export let links: readonly ContactLinkItem[] = [];
	export let year = new Date().getFullYear();
</script>

<footer class="border-t border-white/10 bg-slate-950/40 px-4 py-10 backdrop-blur-sm sm:px-6">
	<div class="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
		<div class="space-y-1">
			<p class="text-lg font-semibold text-white">{name}</p>
			<p class="text-sm text-slate-400">&copy; {year}</p>
		</div>

		{#if links.length}
			<div class="flex flex-wrap items-center gap-x-4 gap-y-2">
				{#each links as link}
					<ContactLink {link} variant="row" />
				{/each}
			</div>
		{/if}
	</div>
</footer>
