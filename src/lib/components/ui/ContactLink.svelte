<script lang="ts">
	import type { ContactLink as ContactLinkItem, ContactLinkKind } from '$lib/types/portfolio';

	export let link: ContactLinkItem;
	export let variant: 'row' | 'button' = 'row';

	const kindLabels: Record<ContactLinkKind, string> = {
		github: 'GitHub',
		linkedin: 'LinkedIn',
		email: 'Email'
	};

	const kindClasses: Record<ContactLinkKind, string> = {
		github: 'border-white/12 bg-white/6 text-slate-100 hover:border-white/24 hover:bg-white/12',
		linkedin:
			'border-sky-300/20 bg-sky-300/10 text-sky-100 hover:border-sky-200/40 hover:bg-sky-300/16',
		email:
			'border-cyan-300/20 bg-cyan-300/10 text-cyan-100 hover:border-cyan-200/40 hover:bg-cyan-300/16'
	};

	function iconPath(kind: ContactLinkKind) {
		switch (kind) {
			case 'github':
				return 'M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.4 6.9 9.8.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5a4 4 0 0 1 1-2.8 3.8 3.8 0 0 1 .1-2.7s.8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1a3.8 3.8 0 0 1 .1 2.7 4 4 0 0 1 1 2.8c0 3.9-2.4 4.7-4.7 5 .4.3.7 1 .7 2v2.9c0 .3.2.7.7.5A10.2 10.2 0 0 0 22 12.2C22 6.6 17.5 2 12 2Z';
			case 'linkedin':
				return 'M6.9 8.5H3.6V19h3.3V8.5Zm.2-3.3A1.9 1.9 0 1 0 3.3 5a1.9 1.9 0 0 0 3.8.2ZM20.7 19v-5.7c0-3.1-1.6-4.5-3.9-4.5a3.4 3.4 0 0 0-3.1 1.7V8.5h-3.3c0 .9 0 10.5 0 10.5h3.3v-5.9c0-.3 0-.6.1-.8.2-.6.8-1.3 1.8-1.3 1.3 0 1.9 1 1.9 2.5V19h3.2Z';
			case 'email':
				return 'M3 6.8A1.8 1.8 0 0 1 4.8 5h14.4A1.8 1.8 0 0 1 21 6.8v10.4a1.8 1.8 0 0 1-1.8 1.8H4.8A1.8 1.8 0 0 1 3 17.2V6.8Zm1.8.2 7.2 5.4L19.2 7H4.8Zm14.4 10.2V9.4l-6.7 5a1 1 0 0 1-1.2 0l-6.5-5v7.8h14.4Z';
		}
	}
</script>

{#if variant === 'row'}
	<a
		href={link.href}
		aria-label={link.ariaLabel ?? `${kindLabels[link.kind]}: ${link.label}`}
		target={link.kind === 'email' ? undefined : '_blank'}
		rel={link.kind === 'email' ? undefined : 'noreferrer'}
		class="text-sm text-slate-300 transition hover:text-white"
	>
		{link.label}
	</a>
{:else}
	<a
		href={link.href}
		aria-label={link.ariaLabel ?? `${kindLabels[link.kind]}: ${link.label}`}
		target={link.kind === 'email' ? undefined : '_blank'}
		rel={link.kind === 'email' ? undefined : 'noreferrer'}
		class={`inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm font-medium transition ${kindClasses[link.kind]} justify-center`}
	>
		<span
			class={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${kindClasses[link.kind]}`}
		>
			<svg class="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d={iconPath(link.kind)} />
			</svg>
		</span>
		<span class="flex flex-col items-start">
			<span class="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400"
				>{kindLabels[link.kind]}</span
			>
			<span class="text-sm text-current">{link.label}</span>
		</span>
	</a>
{/if}
