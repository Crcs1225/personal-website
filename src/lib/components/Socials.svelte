<script lang="ts">
  import SocialItem from '$lib/components/SocialItems.svelte';

  const mySocialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/yourusername',
        ariaLabel: 'GitHub',
        hoverColor: 'hover:text-blue-400',
        icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.92.43.37.823 1.096.823 2.21v3.285c0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>`
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/yourusername',
        ariaLabel: 'LinkedIn',
        hoverColor: 'hover:text-blue-500',
        icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 
        5v14c0 2.76 2.24 5 5 5h14c2.76 
        0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
        19h-3v-10h3v10zm-1.5-11.27c-.97 
        0-1.75-.79-1.75-1.76s.78-1.75 
        1.75-1.75 1.75.78 
        1.75 1.75-.78 1.76-1.75 
        1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
        0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.37h.04c.4-.75 
        1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 
        4.59v5.58z"/>
        </svg>`
    },
    {
        name: 'Email',
        url: 'mailto:youremail@example.com',
        ariaLabel: 'Email',
        hoverColor: 'hover:text-red-400',
        icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 
        2v12c0 1.1.9 2 2 
        2h16c1.1 0 2-.9 
        2-2V6c0-1.1-.9-2-2-2zm0 
        4l-8 5-8-5V6l8 
        5 8-5v2z"/>
        </svg>`
    }
    ];
</script>

<div class="mt-10 flex space-x-4 text-gray-400 dark:text-gray-300">
  {#each mySocialLinks as social}
    <SocialItem
      url={social.url}
      icon={social.icon}
      ariaLabel={social.ariaLabel}
      hoverColor={social.hoverColor}
    />
  {/each}
</div>