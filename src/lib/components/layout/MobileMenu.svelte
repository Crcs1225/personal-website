<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { SectionId } from '$lib/types/portfolio';

	interface MobileNavLink {
		readonly id: SectionId;
		readonly label: string;
		readonly href?: string;
	}

	const dispatch = createEventDispatcher<{
		navigate: SectionId;
		close: void;
	}>();

	export let open = false;
	export let links: readonly MobileNavLink[] = [];
	export let activeSection: SectionId | null = null;
	export let resumeHref: string | undefined = undefined;
	export let resumeLabel = 'Resume';

	function closeMenu() {
		dispatch('close');
	}

	function selectSection(id: SectionId) {
		dispatch('navigate', id);
		dispatch('close');
	}
</script>

{#if open}
	<div class="fixed inset-0 z-40 md:hidden">
		<button
			type="button"
			aria-label="Close mobile navigation"
			class="absolute inset-0 bg-slate-950/72 backdrop-blur-sm"
			on:click={closeMenu}
		></button>

		<div
			class="absolute inset-x-4 top-[4.75rem] rounded-[2rem] border border-white/10 bg-slate-950/88 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.6)] backdrop-blur-2xl"
		>
			<div class="space-y-2">
				{#each links as link, index}
					<a
						href={link.href ?? `#${link.id}`}
						class={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition ${activeSection === link.id ? 'border-cyan-300/25 bg-cyan-300/10 text-white' : 'border-white/8 bg-white/4 text-slate-300 hover:border-white/16 hover:bg-white/8 hover:text-white'}`}
						on:click={() => selectSection(link.id)}
					>
						<span>{link.label}</span>
						<span class="text-xs uppercase tracking-[0.24em] text-slate-500">0{index + 1}</span>
					</a>
				{/each}
			</div>

			{#if resumeHref}
				<div class="mt-5 border-t border-white/10 pt-5">
					<a
						href={resumeHref}
						target="_blank"
						rel="noreferrer"
						class="inline-flex w-full items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/12 px-4 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/18"
					>
						{resumeLabel}
					</a>
				</div>
			{/if}
		</div>
	</div>
{/if}
