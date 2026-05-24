import type { SkillCategory } from '$lib/types/portfolio';

export const skillCategories = [
	{
		title: 'AI Development',
		skills: ['OpenAI API', 'Hugging Face', 'TensorFlow', 'AI Agents', 'Prompt Engineering']
	},
	{
		title: 'Automation & Integrations',
		skills: ['Workflow Automation', 'API Integration', 'System Integrations', 'n8n']
	},
	{
		title: 'Web & SaaS Development',
		skills: ['React', 'Next.js', 'TypeScript', 'FastAPI', 'Docker']
	},
	{
		title: 'Mobile & Deployment',
		skills: ['React Native', 'Flutter', 'Vercel', 'CI/CD', 'Deployment']
	}
] as const satisfies readonly SkillCategory[];
