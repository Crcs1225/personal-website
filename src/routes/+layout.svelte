<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';
</script>

<svelte:head>
	<title>Marc Daniel Caracas | Junior AI & Full-Stack Developer</title>
	<meta name="color-scheme" content="dark" />
	<link rel="icon" type="image/png" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<slot />
