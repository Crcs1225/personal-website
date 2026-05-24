<script lang="ts">
	import GlassCard from '$lib/components/ui/GlassCard.svelte';
	import type { ExperienceEntry, PortfolioDate } from '$lib/types/portfolio';

	export let entry: ExperienceEntry;
	export let isLast = false;

	const monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'short' });

	function formatMonth(date: PortfolioDate) {
		return monthFormatter.format(new Date(Date.UTC(date.year, date.month - 1, 1)));
	}

	function formatDateRange(startDate: PortfolioDate, endDate: PortfolioDate | null) {
		const start = `${formatMonth(startDate)} ${startDate.year}`;

		if (!endDate) {
			return `${start} - Present`;
		}

		const end = `${formatMonth(endDate)} ${endDate.year}`;
		return `${start} - ${end}`;
	}
</script>

<div class="experience-item relative pl-8 sm:pl-10">
	<span
		aria-hidden="true"
		class="absolute left-0 top-7 h-3.5 w-3.5 rounded-full border border-cyan-200/60 bg-cyan-300/70 shadow-[0_0_24px_rgba(34,211,238,0.5)]"
	></span>
	{#if !isLast}
		<span
			aria-hidden="true"
			class="absolute left-[0.4rem] top-11 bottom-[-1.75rem] w-px bg-gradient-to-b from-cyan-300/55 via-white/12 to-transparent sm:left-[0.45rem]"
		></span>
	{/if}

	<GlassCard
		tag="article"
		hoverable={true}
		className="space-y-5 bg-gradient-to-br from-slate-950/80 via-slate-900/74 to-slate-950/78"
	>
		<div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
			<div class="space-y-1">
				<p class="text-xs font-medium uppercase tracking-[0.26em] text-cyan-300/80">
					{entry.company}
				</p>
				<h3 class="text-xl font-semibold text-white">{entry.title}</h3>
			</div>

			<p
				class="shrink-0 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-sm text-slate-300"
			>
				{formatDateRange(entry.startDate, entry.endDate)}
			</p>
		</div>

		<p class="text-sm leading-7 text-slate-300 sm:text-base">{entry.description}</p>

		<div class="flex flex-wrap gap-2.5">
			{#each entry.technologies as technology}
				<span
					class="rounded-full border border-white/10 bg-white/7 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-slate-200"
				>
					{technology}
				</span>
			{/each}
		</div>
	</GlassCard>
</div>
