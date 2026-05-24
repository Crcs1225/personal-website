<script lang="ts">
	import GlassCard from '$lib/components/ui/GlassCard.svelte';
	import type { ProjectEntry, ProjectLink, ProjectLinkKind } from '$lib/types/portfolio';

	export let project: ProjectEntry;
	export let priority = false;

	const linkLabels: Record<ProjectLinkKind, string> = {
		live: 'Live',
		code: 'Code'
	};

	const linkClasses: Record<ProjectLinkKind, string> = {
		live: 'border-cyan-300/20 bg-cyan-300/10 text-cyan-100 hover:border-cyan-200/40 hover:bg-cyan-300/16',
		code: 'border-white/12 bg-white/6 text-slate-100 hover:border-white/24 hover:bg-white/12'
	};

	function iconPath(kind: ProjectLink['kind']) {
		return kind === 'live'
			? 'M14 3h7v7m0-7L10 14M7 7H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2'
			: 'M9 19c-4.1 1.4-4.1-2.1-5.8-2.8m11.6 5.6V18a3.3 3.3 0 0 0-.9-2.3c3-.3 6.1-1.5 6.1-6.8A5.3 5.3 0 0 0 18.5 5 4.9 4.9 0 0 0 18.4 1S17.2.7 14.5 2.5a13.4 13.4 0 0 0-7 0C4.8.7 3.6 1 3.6 1A4.9 4.9 0 0 0 3.5 5 5.3 5.3 0 0 0 2 8.9c0 5.2 3 6.5 6.1 6.8A3.3 3.3 0 0 0 7.2 18v3.8';
	}

	function linkText(link: ProjectLink) {
		return link.label || linkLabels[link.kind];
	}
</script>

<GlassCard
	tag="article"
	hoverable={true}
	paddingClass="p-0"
	className="project-card overflow-hidden bg-gradient-to-br from-slate-950/80 via-slate-900/72 to-slate-950/80"
>
	<div class="flex h-full flex-col">
		<div class="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-950/70">
			<img
				src={project.image.src}
				alt={project.image.alt}
				loading={priority ? 'eager' : 'lazy'}
				decoding="async"
				class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
			/>
			<div
				class="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"
			></div>
		</div>

		<div class="flex flex-1 flex-col gap-5 p-6">
			<div class="space-y-3">
				<div class="flex items-start justify-between gap-4">
					<h3 class="text-xl font-semibold text-white">{project.title}</h3>
					{#if project.links.length}
						<div class="flex shrink-0 items-center gap-2">
							{#each project.links as link}
								<a
									href={link.href}
									target="_blank"
									rel="noreferrer"
									aria-label={linkText(link)}
									class={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${linkClasses[link.kind]}`}
								>
									<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
										<path
											d={iconPath(link.kind)}
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.8"
										/>
									</svg>
								</a>
							{/each}
						</div>
					{/if}
				</div>

				<p class="text-sm leading-7 text-slate-300 sm:text-base">{project.description}</p>
			</div>

			<div class="mt-auto space-y-4">
				<div class="flex flex-wrap gap-2.5">
					{#each project.technologies as technology}
						<span
							class="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-slate-200"
						>
							{technology}
						</span>
					{/each}
				</div>

				{#if project.links.length}
					<div class="flex flex-wrap gap-3">
						{#each project.links as link}
							<a
								href={link.href}
								target="_blank"
								rel="noreferrer"
								class={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${linkClasses[link.kind]}`}
							>
								<span>{linkText(link)}</span>
								<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path
										d={iconPath(link.kind)}
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.8"
									/>
								</svg>
							</a>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</GlassCard>
