<script lang="ts">
  import ProjectCard from './ProjectCard.svelte';

  const projects = [
    {
      imagePath: '/images/weather.jpg',
      title: 'Weather Monitoring Device and Mobile App',
      description:
        'Built an IoT weather station paired with a React Native app for real-time monitoring, using C++ firmware and Firebase-backed cloud data sync.',
      link: '',
      techStack: ['React Native', 'C++', 'IoT', 'Firebase', 'Expo']
    },
    {
      imagePath: '/images/banana.png',
      title: 'Banana Ripeness AI',
      description:
        'Developed a computer vision tool for banana shelf-life classification using EfficientNet and TensorFlow, packaged for practical prediction workflows.',
      link: 'https://app-banana-ml-tghicrftf5lqdhdaadsssj.streamlit.app/',
      techStack: ['EfficientNet', 'TensorFlow', 'FastAPI', 'Streamlit']
    },
    {
      imagePath: '/images/coco-cls.png',
      title: 'Coconut Image Classification Tool',
      description:
        'Delivered an image classification workflow with TensorFlow, Flutter, and FastAPI, supporting mobile inference and production-ready deployment.',
      link: 'https://coco7mg.netlify.app/',
      techStack: ['Python', 'TensorFlow', 'FastAPI', 'HuggingFace', 'Next.js', 'Docker', 'Flutter']
    },
    {
      imagePath: '/images/portfolio.png',
      title: 'Personal Portfolio Website',
      description:
        'Designed a recruiter-friendly Svelte portfolio with modular sections, smooth navigation, and responsive presentation optimized for quick scanning.',
      link: 'https://github.com/Crcs1225/portfolio-website',
      techStack: ['Svelte', 'TypeScript', 'TailwindCSS', 'Vite']
    },
    {
      imagePath: '/images/mealio.jpg',
      title: 'Recommendation System for Food using Hybrid Filtering in Mobile Application',
      description:
        'Built a hybrid recommendation engine that combines collaborative and content-based filtering to personalize food suggestions in a mobile app.',
      link: 'https://github.com/Crcs1225/Meal.io',
      techStack: ['Flutter', 'TensorFlow', 'Firebase', 'Dart', 'Kaggle', 'Python', 'Flask', 'HuggingFace']
    },
    {
      imagePath: '/images/library.jpg',
      title: 'Simple Library Reservation Application',
      description:
        'Created a Flutter-based reservation system with Firebase for real-time updates and straightforward library resource management.',
      link: 'https://github.com/Crcs1225/library',
      techStack: ['Flutter', 'Dart', 'Firebase']
    }
  ];
</script>

<section class="md:py-24 px-0 space-y-8">
  {#each projects as project (project.title)}
    <ProjectCard
      imagePath={project.imagePath}
      title={project.title}
      description={project.description}
      link={project.link}
      techStack={project.techStack}
    />
  {/each}
</section>
