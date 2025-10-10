<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher<{ nav: string }>();

  // Remove the internal active state and use the prop instead
  export let selectedSection: string;

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' }
  ];

  function setActive(id: string) {
    // Don't update internal state, just dispatch the event
    dispatch('nav', id); 
    console.log('dispatching nav with', id);
  }
</script>

<nav class="flex flex-col space-y-6 text-sm font-medium">
  {#each navItems as item}
    <button
      on:click={() => setActive(item.id)}
      class="flex items-center space-x-3 group focus:outline-none"
    >
      <!-- Line indicator -->
      <span
        class="block h-px w-8 transition-all duration-300
               {selectedSection === item.id 
                 ? 'bg-white w-12' 
                 : 'bg-gray-500 group-hover:bg-gray-300'}"
      ></span>

      <!-- Label -->
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