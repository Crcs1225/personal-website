import type { ProjectEntry } from '$lib/types/portfolio';

export const projects = [
	{
		image: {
			src: '/images/weather.jpg',
			alt: 'Weather monitoring device and mobile app preview'
		},
		title: 'Weather Monitoring Device and Mobile App',
		description:
			'Built an IoT weather station paired with a React Native app for real-time monitoring, using C++ firmware and Firebase-backed cloud data sync.',
		links: [],
		technologies: ['React Native', 'C++', 'IoT', 'Firebase', 'Expo']
	},
	{
		image: {
			src: '/images/banana.png',
			alt: 'Banana ripeness AI application preview'
		},
		title: 'Banana Ripeness AI',
		description:
			'Developed a computer vision tool for banana shelf-life classification using EfficientNet and TensorFlow, packaged for practical prediction workflows.',
		links: [
			{
				kind: 'live',
				label: 'Live Demo',
				href: 'https://app-banana-ml-tghicrftf5lqdhdaadsssj.streamlit.app/'
			}
		],
		technologies: ['EfficientNet', 'TensorFlow', 'FastAPI', 'Streamlit']
	},
	{
		image: {
			src: '/images/coco-cls.png',
			alt: 'Coconut image classification tool preview'
		},
		title: 'Coconut Image Classification Tool',
		description:
			'Delivered an image classification workflow with TensorFlow, Flutter, and FastAPI, supporting mobile inference and production-ready deployment.',
		links: [
			{
				kind: 'live',
				label: 'Live Demo',
				href: 'https://coco7mg.netlify.app/'
			}
		],
		technologies: [
			'Python',
			'TensorFlow',
			'FastAPI',
			'Hugging Face',
			'Next.js',
			'Docker',
			'Flutter'
		]
	},
	{
		image: {
			src: '/images/portfolio.png',
			alt: 'Personal portfolio website preview'
		},
		title: 'Personal Portfolio Website',
		description:
			'Designed a recruiter-friendly Svelte portfolio with modular sections, smooth navigation, and responsive presentation optimized for quick scanning.',
		links: [
			{
				kind: 'code',
				label: 'Source Code',
				href: 'https://github.com/Crcs1225/portfolio-website'
			}
		],
		technologies: ['Svelte', 'TypeScript', 'TailwindCSS', 'Vite']
	},
	{
		image: {
			src: '/images/mealio.jpg',
			alt: 'Food recommendation system mobile application preview'
		},
		title: 'Recommendation System for Food using Hybrid Filtering in Mobile Application',
		description:
			'Built a hybrid recommendation engine that combines collaborative and content-based filtering to personalize food suggestions in a mobile app.',
		links: [
			{
				kind: 'code',
				label: 'Source Code',
				href: 'https://github.com/Crcs1225/Meal.io'
			}
		],
		technologies: [
			'Flutter',
			'TensorFlow',
			'Firebase',
			'Dart',
			'Kaggle',
			'Python',
			'Flask',
			'Hugging Face'
		]
	},
	{
		image: {
			src: '/images/library.jpg',
			alt: 'Simple library reservation application preview'
		},
		title: 'Simple Library Reservation Application',
		description:
			'Created a Flutter-based reservation system with Firebase for real-time updates and straightforward library resource management.',
		links: [
			{
				kind: 'code',
				label: 'Source Code',
				href: 'https://github.com/Crcs1225/library'
			}
		],
		technologies: ['Flutter', 'Dart', 'Firebase']
	}
] as const satisfies readonly ProjectEntry[];
