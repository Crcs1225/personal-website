<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{
		nav: 'about' | 'experience' | 'projects';
	}>();

	export let selectedSection: 'about' | 'experience' | 'projects';

	const navItems = [
		{ name: 'About', id: 'about' },
		{ name: 'Experience', id: 'experience' },
		{ name: 'Projects', id: 'projects' }
	] as const;

	function setActive(id: 'about' | 'experience' | 'projects') {
		dispatch('nav', id);
	}
</script>

<nav class="flex flex-col space-y-6 text-sm font-medium">
	{#each navItems as item}
		<button
			data-menu-item
			on:click={() => setActive(item.id)}
			class="menu-item flex items-center space-x-3 group focus:outline-none {selectedSection ===
			item.id
				? 'is-active'
				: ''}"
		>
			<span
				class="menu-line block h-px w-8 transition-all duration-300
               {selectedSection === item.id
					? 'bg-white w-12'
					: 'bg-gray-500 group-hover:bg-gray-300'}"
			></span>

			<span
				class="menu-label uppercase tracking-wide transition-colors duration-300
               {selectedSection === item.id
					? 'text-white font-semibold'
					: 'text-gray-400 group-hover:text-gray-200'}"
			>
				{item.name}
			</span>
		</button>
	{/each}
</nav>

<style>
	.menu-item.is-active .menu-line {
		animation: menu-line-pulse 1.8s ease-in-out infinite;
	}

	.menu-item.is-active .menu-label {
		animation: menu-label-float 1.8s ease-in-out infinite;
	}

	@keyframes menu-line-pulse {
		0%,
		100% {
			transform: scaleX(1);
			opacity: 1;
		}

		50% {
			transform: scaleX(1.08);
			opacity: 0.82;
		}
	}

	@keyframes menu-label-float {
		0%,
		100% {
			transform: translateX(0);
		}

		50% {
			transform: translateX(3px);
		}
	}
</style>
