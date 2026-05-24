import type { ExperienceEntry } from '$lib/types/portfolio';

export const experiences = [
	{
		title: 'Junior AI & Developer',
		company: 'OneMiners',
		startDate: { year: 2025, month: 10 },
		endDate: null,
		description:
			'Building AI automation and full-stack product features, integrating APIs, supporting deployment workflows, and developing web and mobile solutions for internal and client-facing systems.',
		technologies: [
			'Python',
			'JavaScript',
			'TypeScript',
			'Next.js',
			'React Native',
			'Flutter',
			'FastAPI',
			'n8n',
			'Docker',
			'CI/CD'
		]
	},
	{
		title: 'Software Developer Intern',
		company: 'Provincial Government of Pangasinan',
		startDate: { year: 2025, month: 2 },
		endDate: { year: 2025, month: 5 },
		description:
			'Developed and deployed an HR applicant portal that streamlined recruitment processes, reducing manual tasks by 60% and accelerating hiring efficiency.',
		technologies: ['PHP', 'Vanilla JavaScript', 'HTML', 'CSS', 'MySQL', 'Hostinger']
	},
	{
		title: 'Academic Technical Consultant',
		company: 'Freelance / Commissions',
		startDate: { year: 2024, month: 5 },
		endDate: null,
		description:
			'Supported 6 student-led ML projects, improving accuracy by 10-25% and enabling 100% project completion.',
		technologies: [
			'Python',
			'Machine Learning',
			'TensorFlow',
			'Flask',
			'FastAPI',
			'Git',
			'Next.js',
			'Flutter'
		]
	}
] as const satisfies readonly ExperienceEntry[];
