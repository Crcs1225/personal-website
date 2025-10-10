<script lang="ts">
	import Hero from './Hero.svelte';
	import Menu from './Menu.svelte';
	import Socials from './Socials.svelte';

	// Add this line to declare the prop
	export let selectedSection: string;
</script>

<div class="flex flex-col justify-between h-full p-6 md:px-12 md:py-24 text-gray-800 dark:text-gray-200">
	
    <Hero />
    <Menu {selectedSection} on:nav />
    <Socials />
</div>