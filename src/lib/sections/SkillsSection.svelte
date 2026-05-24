<script lang="ts">
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import SkillCategoryCard from '$lib/components/ui/SkillCategoryCard.svelte';
	import { skillCategories } from '$lib/content/skills';
</script>

<section id="skills" class="px-6 py-24 scroll-mt-24 sm:px-8 md:px-10">
	<div class="mx-auto flex max-w-6xl flex-col gap-12">
		<SectionHeading
			eyebrow="Skills"
			title="Structured capabilities across AI, automation, web, and mobile delivery."
			accent="Toolkit"
			description="The current stack is organized by practical delivery areas rather than a flat list, making it easier to scan where depth is strongest."
		/>

		<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
			{#each skillCategories as category}
				<div class="reveal-card">
					<SkillCategoryCard {category} />
				</div>
			{/each}
		</div>
	</div>
</section>
