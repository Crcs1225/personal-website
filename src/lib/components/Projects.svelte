<script lang="ts">
    import ProjectCard from './ProjectCard.svelte';
    const projects = [
    {
      imagePath: "/images/banana.png",
      title: "Banana Ripeness AI",
      description: "Computer vision system classifying banana shelf life stages using EfficientNet and TensorFlow.",
      link: "https://app-banana-ml-tghicrftf5lqdhdaadsssj.streamlit.app/",
      techStack: ['EfficientNet', 'TensorFlow', 'FastAPI', 'Streamlit']
    },
    {
      imagePath: "/images/portfolio.png",
      title: "Personal Portfolio Website",
      description: "Minimalist, recruiter-friendly portfolio showcasing dynamic project sections, animated transitions, and modular components built with Svelte and TailwindCSS.",
      link: "https://github.com/Crcs1225/portfolio-website",
      techStack: ['Svelte', 'TypeScript', 'TailwindCSS', 'Vite']
    },
    {
      imagePath: "images/coco-cls.png",
      title: "Coconut Image Classification Tool",
      description: "Machine learning application for image classification using TensorFlow and custom datasets, achieving 95% accuracy on test data.",
      link: "https://coco7mg.netlify.app/",
      techStack: ['Python', 'TensorFlow', 'FastAPI', 'HuggingFace', 'Next.js', 'Docker']
    },
    {
      imagePath: "images/e-com.png",
      title: "AI-Powered E-Commerce Platform",
      description: "Personal front-end and AI project featuring a responsive e-commerce interface with product recommendation system and an integrated chatbot powered by Retrieval-Augmented Generation (RAG) and LLMs.",
      link: "https://d-ecommerce-omega.vercel.app/",
      techStack: ['Next.js', 'Express', 'MySQL', 'FastAPI', 'RAG', 'LLM', 'HuggingFace', 'Docker' ]
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