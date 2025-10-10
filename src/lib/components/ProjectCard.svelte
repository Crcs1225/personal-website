<script lang="ts">
  export let imagePath: string;
  export let title: string;
  export let description: string;
  export let link: string;
  export let techStack: string[] = [];
</script>

<div
  class="w-full rounded-lg transition-all duration-300 group 
         bg-transparent hover:bg-gray-700/40 overflow-hidden"
>
  <div class="flex flex-col md:flex-row">
    <!-- Image on left side -->
    {#if imagePath}
      <div class="md:w-1/3 flex-shrink-0 pt-6 mx-6">
        <!-- Smaller landscape ratio -->
        <div
            class="relative w-full aspect-[16/9] bg-gray-600 overflow-hidden 
                    border border-gray-400 hover:border-blue-400 
                    transition-all duration-300 rounded-lg"
            >

          <img
            src={imagePath}
            alt={title}
            class="absolute inset-0 w-full h-full object-cover 
                   group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    {/if}

    <!-- Content on right side -->
    <div class="flex-1 p-6">
      <div class="flex items-start justify-between mb-3">
        <h3
          class="text-xl font-semibold text-white 
                 group-hover:text-blue-300 transition-colors"
        >
          {title}
        </h3>
        {#if link}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-blue-400 transition-colors ml-2 flex-shrink-0"
            title="View Project"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 
                   0 002 2h10a2 2 0 002-2v-4M14 4h6m0 
                   0v6m0-6L10 14"
              />
            </svg>
          </a>
        {/if}
      </div>

      <p class="text-gray-300 leading-relaxed mb-4">
        {description}
      </p>

      {#if techStack.length}
        <div class="flex flex-wrap gap-2">
          {#each techStack as tech}
            <span
              class="px-2 py-1 text-xs border border-gray-600 rounded-md 
                     bg-gray-800/70 text-gray-300"
            >
              {tech}
            </span>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>