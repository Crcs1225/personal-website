<script lang="ts">
  export let url: string;
  export let icon: string;
  export let ariaLabel: string;
  export let hoverColor: string;
</script>

<a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={ariaLabel}
  class="flex items-center justify-center w-8 h-8 transition-colors duration-300 {hoverColor}"
>
  <span class="w-5 h-5 text-current" aria-hidden="true">
    {@html icon}
  </span>
</a>