<script lang="ts">
    import ProjectCard from './ProjectCard.svelte';
    const projects = [
    {
      imagePath: "/images/weather.jpg",
      title: "Weather Monitoring Device and Mobile App",
      description: "IoT weather station with React Native app for real-time data visualization, leveraging C++ microcontroller programming and Firebase for cloud storage.",
      link: "",
      techStack: ['React Native', 'C++', 'IoT', 'Firebase', 'Expo']
    },
    {
      imagePath: "/images/banana.png",
      title: "Banana Ripeness AI",
      description: "Computer vision system classifying banana shelf life stages using EfficientNet and TensorFlow.",
      link: "https://app-banana-ml-tghicrftf5lqdhdaadsssj.streamlit.app/",
      techStack: ['EfficientNet', 'TensorFlow', 'FastAPI', 'Streamlit']
    },
    {
      imagePath: "images/coco-cls.png",
      title: "Coconut Image Classification Tool",
      description: "Machine learning application for image classification using TensorFlow and custom datasets, achieving 95% accuracy on test data. Deployed Flutter mobile app with FastAPI backend for real-time predictions.",
      link: "https://coco7mg.netlify.app/",
      techStack: ['Python', 'TensorFlow', 'FastAPI', 'HuggingFace', 'Next.js', 'Docker', 'Flutter']
    },
    {
      imagePath: "/images/portfolio.png",
      title: "Personal Portfolio Website",
      description: "Minimalist, recruiter-friendly portfolio showcasing dynamic project sections, animated transitions, and modular components built with Svelte and TailwindCSS.",
      link: "https://github.com/Crcs1225/portfolio-website",
      techStack: ['Svelte', 'TypeScript', 'TailwindCSS', 'Vite']
    },
    {
      imagePath: "/images/mealio.jpg",
      title: "Recommendation System for Food using Hybrid Filtering in Mobile Application",
      description: "Hybrid recommendation system combining collaborative and content-based filtering for personalized food suggestions.",
      link: "https://github.com/Crcs1225/Meal.io",
      techStack: ['Flutter', 'TensorFlow', 'Firebase', 'Dart', 'Kaggle', 'Python', 'Flask', 'HuggingFace']
    },
    {
      imagePath: "/images/library.jpg",
      title: "Simple Library Reservation Application",
      description: "Flutter application for library reservation management with Firebase backend.",
      link: "https://github.com/Crcs1225/library",
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