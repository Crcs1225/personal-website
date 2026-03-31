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
      on:click={() => setActive(item.id)}
      class="flex items-center space-x-3 group focus:outline-none"
    >
      <span
        class="block h-px w-8 transition-all duration-300
               {selectedSection === item.id
                 ? 'bg-white w-12'
                 : 'bg-gray-500 group-hover:bg-gray-300'}"
      ></span>

      <span
        class="uppercase tracking-wide transition-colors duration-300
               {selectedSection === item.id
                 ? 'text-white font-semibold'
                 : 'text-gray-400 group-hover:text-gray-200'}"
      >
        {item.name}
      </span>
    </button>
  {/each}
</nav>
