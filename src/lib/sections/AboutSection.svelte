<script lang="ts">
	import GlassCard from '$lib/components/ui/GlassCard.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import { experiences } from '$lib/content/experience';
	import { profile } from '$lib/content/profile';

	const currentRole = experiences.find((entry) => entry.endDate === null) ?? experiences[0] ?? null;

	const initials = profile.name
		.split(' ')
		.map((part) => part[0])
		.join('')
		.slice(0, 3);
</script>

<section id="about" class="px-6 py-24 scroll-mt-24 sm:px-8 md:px-10">
	<div class="mx-auto flex max-w-6xl flex-col gap-12">
		<SectionHeading
			eyebrow="About"
			title="Building product-minded software with practical AI integration."
			accent="Profile"
			description="A grounded overview of background, current focus, and the kind of systems Marc Daniel Caracas is building today."
		/>

		<div class="grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
			<GlassCard
				className="reveal-card overflow-hidden bg-gradient-to-br from-slate-950/82 via-slate-900/76 to-slate-950/82"
			>
				<div class="flex h-full flex-col gap-8">
					<div
						class="relative flex min-h-[19rem] items-end overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.3),transparent_45%),linear-gradient(160deg,rgba(15,23,42,0.95),rgba(2,6,23,0.92))] p-6"
					>
						<div
							class="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(255,255,255,0.04),transparent)]"
						></div>
						<div class="relative flex w-full items-end justify-between gap-6">
							<div>
								<p class="text-xs font-medium uppercase tracking-[0.28em] text-cyan-300/75">
									Placeholder Portrait
								</p>
								<p class="mt-2 max-w-[16rem] text-sm leading-7 text-slate-300">
									Visual placeholder reserved for a future professional portrait while keeping the
									first pass honest and content-led.
								</p>
							</div>

							<div
								class="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/8 text-2xl font-semibold tracking-[0.18em] text-white shadow-[0_16px_40px_rgba(6,182,212,0.22)]"
							>
								{initials}
							</div>
						</div>
					</div>

					<div class="grid gap-4 sm:grid-cols-3">
						{#each profile.about.facts as fact}
							<div class="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
								<p class="text-[0.7rem] uppercase tracking-[0.24em] text-slate-400">{fact.label}</p>
								<p class="mt-3 text-sm leading-6 text-slate-200">{fact.value}</p>
							</div>
						{/each}
					</div>
				</div>
			</GlassCard>

			<GlassCard
				className="reveal-card space-y-6 bg-gradient-to-br from-slate-950/82 via-slate-900/74 to-slate-950/80"
			>
				<div class="space-y-3">
					<p class="text-xs font-medium uppercase tracking-[0.28em] text-cyan-300/78">
						Refined Bio
					</p>
					<h3 class="text-2xl font-semibold tracking-tight text-white">
						From systems thinking to production-oriented delivery.
					</h3>
				</div>

				<div class="space-y-5">
					{#each profile.about.paragraphs as paragraph}
						<p class="text-sm leading-8 text-slate-300 sm:text-base">
							{paragraph}
						</p>
					{/each}
				</div>

				<div class="rounded-[1.4rem] border border-cyan-300/12 bg-cyan-300/8 p-5">
					<p class="text-[0.7rem] uppercase tracking-[0.24em] text-cyan-200/78">Current Role</p>
					{#if currentRole}
						<p class="mt-3 text-lg font-medium text-white">
							{currentRole.title} at {currentRole.company}
						</p>
						<p class="mt-2 text-sm leading-7 text-slate-300">
							Focused on AI automation, full-stack execution, and product delivery that holds up in
							real operating environments.
						</p>
					{:else}
						<p class="mt-3 text-sm leading-7 text-slate-300">
							Current role details can be added here as experience entries are published.
						</p>
					{/if}
				</div>
			</GlassCard>
		</div>
	</div>
</section>
