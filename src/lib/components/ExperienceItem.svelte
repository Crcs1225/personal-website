<script lang="ts">
  export let title: string;
  export let company: string;
  export let dateRange: string;
  export let description: string;
  export let techStacks: string[] = [];
</script>

<div
  class="border-l-2 border-gray-600 pl-4 transition-all duration-300 hover:border-blue-400 hover:translate-x-1 group"
>
  <div class="flex items-center justify-between mb-1">
    <h2 class="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">{title}</h2>
    <span class="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">{dateRange}</span>
  </div>
  <p class="text-sm text-gray-300 font-medium mb-2">{company}</p>
  <p class="text-sm text-gray-400 leading-relaxed mb-3">{description}</p>

  {#if techStacks.length}
    <div class="flex flex-wrap gap-2">
      {#each techStacks as tech}
        <span class="px-2 py-1 text-xs border border-gray-600 rounded-md bg-gray-700 text-gray-300 transition-colors hover:bg-gray-600 hover:border-gray-500">
          {tech}
        </span>
      {/each}
    </div>
  {/if}
</div>