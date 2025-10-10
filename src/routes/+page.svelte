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

  onMount(() => {
    // Only set up scroll detection for desktop
    if (window.innerWidth >= 768) {
      const rightColumn = document.querySelector('.right-column') as HTMLElement;
      const sections = document.querySelectorAll('section.desktop-section');
      
      const updateActiveSection = () => {
        const scrollPosition = rightColumn.scrollTop + rightColumn.clientHeight / 2;
        
        let currentActive = 'about';
        sections.forEach((section) => {
          const element = section as HTMLElement;
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition <= offsetBottom) {
            currentActive = section.id;
          }
        });
        
        selectedSection = currentActive as typeof selectedSection;
      };

      rightColumn.addEventListener('scroll', updateActiveSection);
      
      return () => {
        rightColumn.removeEventListener('scroll', updateActiveSection);
      };
    }
  });

  function handleNav(e: CustomEvent<string>) {
    const id = e.detail;
    selectedSection = id as typeof selectedSection;
    
    if (window.innerWidth >= 768) {
      // Desktop: scroll within right column to desktop sections
      const element = document.querySelector(`section.desktop-section#${id}`) as HTMLElement | null;
      if (element) {
        const rightColumn = document.querySelector('.right-column') as HTMLElement;
        const offset = element.offsetTop - (rightColumn.clientHeight - element.offsetHeight) / 2;
        rightColumn.scrollTo({ top: offset, behavior: 'smooth' });
      }
    } else {
      // Mobile: scroll entire page to mobile sections
      const element = document.querySelector(`section.mobile-section#${id}`) as HTMLElement | null;
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
</script>

<div class="min-h-screen">
  <!-- Mobile Header (Hero + Socials) -->
  <div class="md:hidden  text-white p-6 border-b border-gray-700">
    <div class="flex flex-col items-center text-center space-y-4 pt-12">
      <!-- Hero Content -->
      <Hero />
      <Socials />
    </div>
  </div>

  <!-- Mobile Navigation -->
  <div class="md:hidden sticky top-0 bg-gray-800 border-b border-gray-700 z-10">
    <div class="flex justify-around py-3">
      <a href="#about" class="text-gray-400 hover:text-white transition-colors text-sm">About</a>
      <a href="#experience" class="text-gray-400 hover:text-white transition-colors text-sm">Experience</a>
      <a href="#projects" class="text-gray-400 hover:text-white transition-colors text-sm">Projects</a>
    </div>
  </div>

  <!-- Main Content -->
  <div class="grid grid-cols-1 md:grid-cols-24 min-h-screen">
    <!-- Left Column - Hidden on mobile -->
    <div class="hidden md:block md:col-span-11">
      <LeftColumn {selectedSection} on:nav={handleNav} />
    </div>

    <!-- Right Column - Full width single scroll on mobile -->
    <div class="right-column col-span-1 md:col-span-13 md:px-12 md:overflow-y-auto md:h-screen pt-24">
      <!-- Mobile: Single scroll with section titles -->
      <div class="md:hidden space-y-8 px-6">
        <!-- About Section with Title -->
        <section id="about" class="mobile-section pt-8">
          <h2 class="text-2xl font-bold text-white mb-6">About</h2>
          <About />
        </section>
        
        <!-- Experience Section with Title -->
        <section id="experience" class="mobile-section pt-8">
          <h2 class="text-2xl font-bold text-white mb-6">Experience</h2>
          <Experience />
        </section>
        
        <!-- Projects Section with Title -->
        <section id="projects" class="mobile-section pt-8">
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