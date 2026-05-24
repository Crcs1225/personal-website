<script lang="ts">
	import GlassCard from '$lib/components/ui/GlassCard.svelte';
	import type { SkillCategory } from '$lib/types/portfolio';

	export let category: SkillCategory;
</script>

<GlassCard
	tag="article"
	hoverable={true}
	className="h-full space-y-5 bg-gradient-to-br from-slate-950/75 via-slate-900/70 to-slate-950/75"
>
	<div class="space-y-2">
		<p class="text-xs font-medium uppercase tracking-[0.28em] text-cyan-300/75">Category</p>
		<h3 class="text-xl font-semibold text-white">{category.title}</h3>
	</div>

	<div class="flex flex-wrap gap-2.5">
		{#each category.skills as skill}
			<span
				class="rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-sm text-slate-200"
			>
				{skill}
			</span>
		{/each}
	</div>
</GlassCard>
