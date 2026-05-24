<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import MobileMenu from '$lib/components/layout/MobileMenu.svelte';
	import type { SectionId } from '$lib/types/portfolio';

	interface MobileNavLink {
		readonly id: SectionId;
		readonly label: string;
		readonly href?: string;
	}

	const dispatch = createEventDispatcher<{
		navigate: SectionId;
	}>();

	export let name: string;
	export let links: readonly MobileNavLink[] = [];
	export let activeSection: SectionId | null = null;
	export let resumeHref: string | undefined = undefined;
	export let resumeLabel = 'Resume';
	export let homeHref = '#top';

	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function handleNavigate(id: SectionId) {
		dispatch('navigate', id);
		mobileMenuOpen = false;
	}
</script>

<header class="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
	<div
		class="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/72 px-4 py-3 shadow-[0_18px_64px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:px-6"
	>
		<a href={homeHref} class="flex min-w-0 items-center gap-3 text-white">
			<span
				class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/12 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100"
			>
				{name.slice(0, 2)}
			</span>
			<span class="min-w-0">
				<span class="block truncate text-sm font-medium uppercase tracking-[0.28em] text-slate-400">
					Portfolio
				</span>
				<span class="block truncate text-base font-semibold">{name}</span>
			</span>
		</a>

		<nav class="hidden items-center gap-2 md:flex" aria-label="Primary">
			{#each links as link}
				<a
					href={link.href ?? `#${link.id}`}
					aria-current={activeSection === link.id ? 'page' : undefined}
					class={`rounded-full px-4 py-2 text-sm font-medium transition ${activeSection === link.id ? 'bg-white/12 text-white' : 'text-slate-300 hover:bg-white/8 hover:text-white'}`}
					on:click={() => handleNavigate(link.id)}
				>
					{link.label}
				</a>
			{/each}

			{#if resumeHref}
				<a
					href={resumeHref}
					target="_blank"
					rel="noreferrer"
					class="ml-2 inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/16"
				>
					{resumeLabel}
				</a>
			{/if}
		</nav>

		<button
			type="button"
			class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-slate-100 transition hover:border-white/20 hover:bg-white/10 md:hidden"
			aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
			aria-expanded={mobileMenuOpen}
			on:click={toggleMobileMenu}
		>
			<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
				{#if mobileMenuOpen}
					<path d="M6 6 18 18M6 18 18 6" stroke-linecap="round" stroke-width="1.8" />
				{:else}
					<path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" stroke-width="1.8" />
				{/if}
			</svg>
		</button>
	</div>

	<MobileMenu
		open={mobileMenuOpen}
		{links}
		{activeSection}
		{resumeHref}
		{resumeLabel}
		on:navigate={(event) => handleNavigate(event.detail)}
		on:close={() => (mobileMenuOpen = false)}
	/>
</header>
