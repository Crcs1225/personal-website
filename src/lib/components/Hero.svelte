<script lang="ts">
	const nameParts = ['Marc', 'Daniel', 'Caracas'];
</script>

<div class="space-y-2">
	<h1 class="hero-name text-5xl font-bold font-sans" aria-label="Marc Daniel Caracas">
		{#each nameParts as word, wordIndex}
			<span class="hero-name-word">
				{#each Array.from(word) as char}
					<span class="hero-name-char">{char}</span>
				{/each}
			</span>
			{#if wordIndex < nameParts.length - 1}
				<span class="hero-name-gap" aria-hidden="true">&nbsp;</span>
			{/if}
		{/each}
	</h1>
	<p class="hero-line text-xl text-gray-300">Junior AI & Full-Stack Developer</p>
	<p class="hero-line text-m text-gray-400">
		Building AI automation systems, web products, and mobile applications with a focus on practical
		integrations, scalable delivery, and real-world product execution.
	</p>
</div>

<style>
	.hero-name {
		color: #ffffff;
		will-change: transform;
	}

	.hero-name-word,
	.hero-name-char,
	.hero-name-gap {
		display: inline-block;
	}

	.hero-name-char {
		will-change: transform, opacity, filter;
	}
</style>
