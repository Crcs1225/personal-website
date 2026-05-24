import type { ProfileContent } from '$lib/types/portfolio';

export const profile = {
	name: 'Marc Daniel Caracas',
	role: 'Junior AI & Full-Stack Developer',
	summary:
		'Building AI automation systems, web products, and mobile applications with a focus on practical integrations, scalable delivery, and real-world product execution.',
	availability: 'Open to AI Product & Software Roles',
	education: 'BS Computer Science',
	focus: 'AI automation, integrations, and full-stack delivery',
	location: 'Pangasinan, Philippines',
	about: {
		facts: [
			{ label: 'Education', value: 'BS Computer Science' },
			{ label: 'Focus', value: 'AI automation, integrations, and full-stack delivery' },
			{ label: 'Location', value: 'Pangasinan, Philippines' }
		],
		paragraphs: [
			'Marc Daniel Caracas is a junior AI and full-stack developer building practical systems across web, mobile, and automation workflows.',
			'At OneMiners, he works on AI-enabled product features, API integrations, deployment workflows, and delivery across internal and client-facing tools.',
			'His work stays grounded in real operational needs: shipping maintainable software, connecting services cleanly, and turning applied AI into usable product experiences.'
		]
	},
	contactLinks: [
		{
			kind: 'github',
			label: 'GitHub',
			href: 'https://github.com/Crcs1225',
			ariaLabel: 'GitHub profile'
		},
		{
			kind: 'linkedin',
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/zrmdcs12',
			ariaLabel: 'LinkedIn profile'
		},
		{
			kind: 'email',
			label: 'Email',
			href: 'mailto:caracasmarcdaniel89@gmail.com',
			ariaLabel: 'Send email'
		}
	]
} as const satisfies ProfileContent;
