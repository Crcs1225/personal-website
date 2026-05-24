<script lang="ts">
	import ProjectCard from '$lib/components/ui/ProjectCard.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import { projects } from '$lib/content/projects';
</script>

<section id="projects" class="px-6 py-24 scroll-mt-24 sm:px-8 md:px-10">
	<div class="mx-auto flex max-w-6xl flex-col gap-12">
		<SectionHeading
			eyebrow="Projects"
			title="Selected product and applied AI work built around real delivery goals."
			accent={`${projects.length} Projects`}
			description="This grid uses the current portfolio dataset and real project images, spanning AI tools, mobile applications, and production-focused web builds."
		/>

		<div class="grid gap-6 lg:grid-cols-2">
			{#each projects as project, index}
				<div class="reveal-card">
					<ProjectCard {project} priority={index < 2} />
				</div>
			{/each}
		</div>
	</div>
</section>
