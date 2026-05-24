<script lang="ts">
	import { onMount } from 'svelte';
	import SiteFooter from '$lib/components/layout/SiteFooter.svelte';
	import SiteHeader from '$lib/components/layout/SiteHeader.svelte';
	import { profile } from '$lib/content/profile';
	import AboutSection from '$lib/sections/AboutSection.svelte';
	import ContactSection from '$lib/sections/ContactSection.svelte';
	import ExperienceSection from '$lib/sections/ExperienceSection.svelte';
	import HeroSection from '$lib/sections/HeroSection.svelte';
	import ProjectsSection from '$lib/sections/ProjectsSection.svelte';
	import SkillsSection from '$lib/sections/SkillsSection.svelte';
	import type { SectionId } from '$lib/types/portfolio';

	interface SectionConfig {
		readonly id: SectionId;
		readonly label: string;
		readonly href: `#${SectionId}`;
	}

	const sections: readonly SectionConfig[] = [
		{ id: 'top', label: 'Top', href: '#top' },
		{ id: 'about', label: 'About', href: '#about' },
		{ id: 'skills', label: 'Skills', href: '#skills' },
		{ id: 'projects', label: 'Projects', href: '#projects' },
		{ id: 'experience', label: 'Experience', href: '#experience' },
		{ id: 'contact', label: 'Contact', href: '#contact' }
	];

	const navItems = sections.filter((section) => section.id !== 'top');
	const sectionIds = sections.map((section) => section.id);
	const footerYear = 2026;
	let activeSection: SectionId | null = 'top';

	function handleNavigate(event: CustomEvent<SectionId>) {
		activeSection = event.detail;
	}

	onMount(() => {
		const sections = sectionIds
			.map((id) => document.getElementById(id))
			.filter((section): section is HTMLElement => section !== null);

		const observer = new IntersectionObserver(
			(entries) => {
				const visibleEntries = entries
					.filter((entry) => entry.isIntersecting)
					.sort((left, right) => right.intersectionRatio - left.intersectionRatio);

				const currentId = visibleEntries[0]?.target.id;

				if (currentId && sectionIds.includes(currentId as SectionId)) {
					activeSection = currentId as SectionId;
				}
			},
			{
				rootMargin: '-35% 0px -45% 0px',
				threshold: [0.1, 0.25, 0.4, 0.6]
			}
		);

		for (const section of sections) {
			observer.observe(section);
		}

		const syncFromHash = () => {
			const id = window.location.hash.slice(1) as SectionId;

			if (sectionIds.includes(id)) {
				activeSection = id;
				return;
			}

			activeSection = 'top';
		};

		syncFromHash();
		window.addEventListener('hashchange', syncFromHash);

		return () => {
			observer.disconnect();
			window.removeEventListener('hashchange', syncFromHash);
		};
	});
</script>

<svelte:head>
	<style>
		html {
			scroll-behavior: smooth;
		}

		@media (prefers-reduced-motion: reduce) {
			html {
				scroll-behavior: auto;
			}
		}
	</style>
</svelte:head>

<SiteHeader
	name={profile.name}
	links={navItems}
	{activeSection}
	homeHref="#top"
	on:navigate={handleNavigate}
/>

<main>
	<HeroSection />
	<AboutSection />
	<SkillsSection />
	<ProjectsSection />
	<ExperienceSection />
	<ContactSection />
</main>

<SiteFooter name={profile.name} links={profile.contactLinks} year={footerYear} />
