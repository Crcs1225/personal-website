<script lang="ts">
	export let className = '';
	export let paddingClass = 'p-6';
	export let hoverable = false;
	export let tag: keyof HTMLElementTagNameMap = 'div';

	$: hoverClass = hoverable
		? 'transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/12 hover:shadow-2xl hover:shadow-cyan-950/30'
		: '';
</script>

<svelte:element
	this={tag}
	class={`group rounded-[1.75rem] border border-white/10 bg-white/8 backdrop-blur-xl shadow-[0_24px_80px_rgba(15,23,42,0.45)] ${paddingClass} ${hoverClass} ${className}`}
	{...$$restProps}
	on:click
	on:keydown
	on:keyup
	on:focus
	on:blur
	on:mouseenter
	on:mouseleave
>
	<slot />
</svelte:element>
