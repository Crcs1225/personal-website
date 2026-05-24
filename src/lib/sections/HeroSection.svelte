<script lang="ts">
	import { experiences } from '$lib/content/experience';
	import { profile } from '$lib/content/profile';

	const currentRole = experiences.find((entry) => entry.endDate === null) ?? experiences[0] ?? null;
</script>

<section
	id="top"
	class="relative flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden px-6 py-28 sm:px-8 md:px-10"
>
	<div class="absolute inset-0 -z-10">
		<div
			class="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/18 blur-3xl sm:h-96 sm:w-96"
		></div>
		<div
			class="absolute bottom-12 right-8 h-52 w-52 rounded-full bg-sky-500/12 blur-3xl sm:h-72 sm:w-72"
		></div>
	</div>

	<div class="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
		<div
			class="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-slate-200 backdrop-blur"
		>
			<span class="inline-flex items-center gap-2">
				<span
					class="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.8)]"
				></span>
				{profile.availability}
			</span>
			{#if currentRole}
				<span class="hidden h-4 w-px bg-white/10 sm:block"></span>
				<span class="text-cyan-200/90">{currentRole.title} at {currentRole.company}</span>
			{/if}
		</div>

		<div class="mt-8 max-w-4xl space-y-6">
			<p class="text-sm font-medium uppercase tracking-[0.32em] text-cyan-300/78">
				{profile.role}
			</p>

			<h1 class="text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
				{profile.name}
			</h1>

			<p class="mx-auto max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
				{profile.summary}
			</p>
		</div>

		<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
			<a
				href="#projects"
				class="inline-flex min-w-[11rem] items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/12 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/18"
			>
				View Projects
			</a>
			<a
				href="#contact"
				class="inline-flex min-w-[11rem] items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-white/24 hover:bg-white/12"
			>
				Get In Touch
			</a>
		</div>
	</div>
</section>
