<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
</script>

<svelte:head>
	<title>Marc Daniel Caracas | Portfolio</title>
	<link rel="icon" href={favicon} />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</svelte:head>

<!-- Cyber Grid Background -->
<div class="cyber-grid"></div>

<!-- Layout wrapper -->
<div class="font-sans bg-gray-900/90 text-white min-h-screen relative z-10">
	<slot />
</div>

<style>
	.cyber-grid {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: 
			linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
			linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px);
		background-size: 40px 40px;
		animation: gridMove 20s linear infinite;
		z-index: -1;
	}

	.cyber-grid::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 200%;
		height: 200%;
		background: 
			radial-gradient(circle at 30% 30%, rgba(120, 119, 198, 0.4) 0%, transparent 50%),
			radial-gradient(circle at 70% 70%, rgba(255, 119, 198, 0.3) 0%, transparent 50%);
		animation: gradientShift 25s linear infinite;
	}

	@keyframes gridMove {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(40px, 40px);
		}
	}

	@keyframes gradientShift {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(-50%, -50%);
		}
	}
</style>