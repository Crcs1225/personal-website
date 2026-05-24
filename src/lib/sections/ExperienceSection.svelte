<script lang="ts">
	import ExperienceTimelineItem from '$lib/components/ui/ExperienceTimelineItem.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import { experiences } from '$lib/content/experience';
</script>

<section id="experience" class="px-6 py-24 scroll-mt-24 sm:px-8 md:px-10">
	<div class="mx-auto flex max-w-5xl flex-col gap-12">
		<SectionHeading
			eyebrow="Experience"
			title="A cleaner timeline of current roles, internships, and applied consulting work."
			accent="Timeline"
			description="The experience history stays factual to the current content source while presenting each role with more premium spacing, emphasis, and technical context."
		/>

		<div class="space-y-7">
			{#each experiences as entry, index}
				<ExperienceTimelineItem {entry} isLast={index === experiences.length - 1} />
			{/each}
		</div>
	</div>
</section>
