<script lang="ts">
  import { onMount } from 'svelte';
  import LeftColumn from '$lib/components/LeftColumn.svelte';
  import About from '$lib/components/About.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Socials from '$lib/components/Socials.svelte';

  let selectedSection: 'about' | 'experience' | 'projects' = 'about';
  let rightColumn: HTMLElement | null = null;

  onMount(() => {
    if (!rightColumn || window.innerWidth < 768) {
      return;
    }

    const sections = Array.from(
      rightColumn.querySelectorAll<HTMLElement>('section.desktop-section')
    );

    let ticking = false;

    const updateActiveSection = () => {
      ticking = false;

      const midpoint = rightColumn!.scrollTop + rightColumn!.clientHeight / 2;
      let currentActive = sections[0]?.id ?? 'about';

      for (const section of sections) {
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.offsetHeight;

        if (midpoint >= offsetTop && midpoint <= offsetBottom) {
          currentActive = section.id;
          break;
        }

        if (midpoint > offsetBottom) {
          currentActive = section.id;
        }
      }

      selectedSection = currentActive as typeof selectedSection;
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();

    rightColumn.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      rightColumn?.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateActiveSection);
    };
  });

  function navigateToSection(id: typeof selectedSection) {
    selectedSection = id;

    if (window.innerWidth >= 768) {
      const element = rightColumn?.querySelector<HTMLElement>(
        `section.desktop-section#${id}`
      );

      if (element && rightColumn) {
        const centeredOffset =
          element.offsetTop - (rightColumn.clientHeight - element.offsetHeight) / 2;
        const maxScrollTop = rightColumn.scrollHeight - rightColumn.clientHeight;
        const top = Math.max(0, Math.min(centeredOffset, maxScrollTop));

        rightColumn.scrollTo({ top, behavior: 'smooth' });
      }

      return;
    }

    const element = document.querySelector<HTMLElement>(
      `section.mobile-section#${id}`
    );

    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleNav(e: CustomEvent<typeof selectedSection>) {
    navigateToSection(e.detail);
  }
</script>

<div class="min-h-screen">
  <!-- Mobile Header (Hero + Socials) -->
  <div class="md:hidden text-white p-6 border-b border-gray-700">
    <div class="flex flex-col items-center text-center space-y-4 pt-12">
      <Hero />
      <Socials />
    </div>
  </div>

  <!-- Mobile Navigation -->
  <div class="md:hidden sticky top-0 bg-gray-800 border-b border-gray-700 z-10">
    <div class="flex justify-around py-3">
      <button
        type="button"
        class="text-sm transition-colors {selectedSection === 'about' ? 'text-white' : 'text-gray-400 hover:text-white'}"
        on:click={() => navigateToSection('about')}
      >
        About
      </button>
      <button
        type="button"
        class="text-sm transition-colors {selectedSection === 'experience' ? 'text-white' : 'text-gray-400 hover:text-white'}"
        on:click={() => navigateToSection('experience')}
      >
        Experience
      </button>
      <button
        type="button"
        class="text-sm transition-colors {selectedSection === 'projects' ? 'text-white' : 'text-gray-400 hover:text-white'}"
        on:click={() => navigateToSection('projects')}
      >
        Projects
      </button>
    </div>
  </div>

  <!-- Main Content -->
  <div class="grid grid-cols-1 md:grid-cols-24 min-h-screen">
    <!-- Left Column - Hidden on mobile -->
    <div class="hidden md:block md:col-span-11">
      <LeftColumn {selectedSection} on:nav={handleNav} />
    </div>

    <!-- Right Column - Full width single scroll on mobile -->
    <div
      bind:this={rightColumn}
      class="right-column col-span-1 md:col-span-13 md:px-12 md:overflow-y-auto md:h-screen pt-24"
    >
      <!-- Mobile: Single scroll with section titles -->
      <div class="md:hidden space-y-8 px-6">
        <section id="about" class="mobile-section pt-8 scroll-mt-24">
          <h2 class="text-2xl font-bold text-white mb-6">About</h2>
          <About />
        </section>

        <section id="experience" class="mobile-section pt-8 scroll-mt-24">
          <h2 class="text-2xl font-bold text-white mb-6">Experience</h2>
          <Experience />
        </section>

        <section id="projects" class="mobile-section pt-8 scroll-mt-24">
          <h2 class="text-2xl font-bold text-white mb-6">Projects</h2>
          <Projects />
        </section>
      </div>

      <!-- Desktop: No titles, independent scroll -->
      <div class="hidden md:block">
        <section id="about" class="desktop-section"><About /></section>
        <section id="experience" class="desktop-section"><Experience /></section>
        <section id="projects" class="desktop-section"><Projects /></section>
      </div>

      <Footer />
    </div>
  </div>
</div>
