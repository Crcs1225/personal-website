<script lang="ts">
	type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	type HeadingAttributes = {
		id?: string;
		role?: string;
		tabindex?: number;
		'aria-label'?: string;
		'aria-labelledby'?: string;
		'aria-describedby'?: string;
		[key: `data-${string}`]: string | number | undefined;
	};

	export let eyebrow: string | undefined = undefined;
	export let title: string;
	export let accent: string | undefined = undefined;
	export let description: string | undefined = undefined;
	export let align: 'left' | 'center' = 'left';
	export let headingTag: HeadingTag = 'h2';
	export let headingAttributes: HeadingAttributes = {};

	$: isCentered = align === 'center';
</script>

<div {...$$restProps} class:text-center={isCentered} class="space-y-4">
	{#if eyebrow}
		<p class="text-xs font-medium uppercase tracking-[0.32em] text-cyan-300/80">
			{eyebrow}
		</p>
	{/if}

	<div class="space-y-3">
		<div class:justify-center={isCentered} class="flex items-center gap-3">
			<span class="h-px w-12 bg-gradient-to-r from-cyan-300/90 via-sky-400/70 to-transparent"
			></span>
			{#if accent}
				<span
					class="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-slate-300"
				>
					{accent}
				</span>
			{/if}
		</div>

		<svelte:element
			this={headingTag}
			{...headingAttributes}
			class="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl"
		>
			{title}
		</svelte:element>
	</div>

	{#if description}
		<p class:mx-auto={isCentered} class="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
			{description}
		</p>
	{/if}
</div>
