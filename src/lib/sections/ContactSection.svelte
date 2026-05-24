<script lang="ts">
	import ContactLink from '$lib/components/ui/ContactLink.svelte';
	import GlassCard from '$lib/components/ui/GlassCard.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import { profile } from '$lib/content/profile';

	const emailLink = profile.contactLinks.find((link) => link.kind === 'email') ?? null;
</script>

<section id="contact" class="px-6 py-24 scroll-mt-24 sm:px-8 md:px-10">
	<div class="mx-auto flex max-w-6xl flex-col gap-12">
		<SectionHeading
			eyebrow="Contact"
			title="Reach out directly for AI product, automation, or software collaboration."
			accent="Open"
			description="The contact area stays practical: direct links, a real mail target, and a polished CTA shell without pretending there is a backend form flow."
		/>

		<div class="grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
			<GlassCard
				className="reveal-card space-y-6 bg-gradient-to-br from-slate-950/82 via-slate-900/74 to-slate-950/80"
			>
				<div class="space-y-3">
					<p class="text-xs font-medium uppercase tracking-[0.28em] text-cyan-300/78">
						Direct Links
					</p>
					<h3 class="text-2xl font-semibold tracking-tight text-white">
						Start with the channel that fits best.
					</h3>
					<p class="text-sm leading-7 text-slate-300 sm:text-base">
						GitHub for code, LinkedIn for professional context, or email for direct project and role
						conversations.
					</p>
				</div>

				<div class="grid gap-4">
					{#if profile.contactLinks.length}
						{#each profile.contactLinks as link}
							<ContactLink {link} variant="button" />
						{/each}
					{:else}
						<div
							class="rounded-[1.2rem] border border-dashed border-white/12 bg-white/4 p-5 text-sm leading-7 text-slate-300"
						>
							Contact links can be added here when public channels are available.
						</div>
					{/if}
				</div>
			</GlassCard>

			<GlassCard
				className="reveal-card space-y-6 bg-gradient-to-br from-slate-950/80 via-slate-900/76 to-slate-950/82"
			>
				<div class="space-y-3">
					<p class="text-xs font-medium uppercase tracking-[0.28em] text-cyan-300/78">
						Presentation Shell
					</p>
					<h3 class="text-2xl font-semibold tracking-tight text-white">
						An honest contact panel without a fake submission flow.
					</h3>
				</div>

				<div class="grid gap-4 sm:grid-cols-2">
					<div class="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
						<p class="text-[0.7rem] uppercase tracking-[0.24em] text-slate-400">Best For</p>
						<p class="mt-3 text-sm leading-7 text-slate-200">
							AI product roles, automation builds, consulting, and implementation partnerships.
						</p>
					</div>
					<div class="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
						<p class="text-[0.7rem] uppercase tracking-[0.24em] text-slate-400">Preferred Path</p>
						<p class="mt-3 text-sm leading-7 text-slate-200">
							Send a direct email with the role, product context, or integration problem to discuss.
						</p>
					</div>
				</div>

				<div class="space-y-4 rounded-[1.4rem] border border-white/10 bg-white/4 p-5">
					<div class="space-y-2">
						<p class="text-[0.7rem] uppercase tracking-[0.24em] text-slate-400">Subject</p>
						<div
							class="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-300"
						>
							AI product role / project inquiry
						</div>
					</div>

					<div class="space-y-2">
						<p class="text-[0.7rem] uppercase tracking-[0.24em] text-slate-400">Message Outline</p>
						<div
							class="rounded-[1.4rem] border border-white/10 bg-slate-950/50 px-4 py-4 text-sm leading-7 text-slate-300"
						>
							Share the role or project scope, the stack involved, expected outcomes, and the best
							next step for a conversation.
						</div>
					</div>
				</div>

				{#if emailLink}
					<a
						href={emailLink.href}
						class="inline-flex items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/12 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/18"
					>
						Email Marc Daniel Caracas
					</a>
				{:else}
					<div
						class="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-300"
					>
						Email link unavailable
					</div>
				{/if}
			</GlassCard>
		</div>
	</div>
</section>
