<script lang="ts">
  import ExperienceItem from './ExperienceItem.svelte';

  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'Provincial Government of Pangasinan',
      dateRange: 'Feb 2025 – May 2025',
      description: 'Built and deployed an HR applicant portal, reducing manual HR tasks by 60% and improving hiring speed.',
      techStacks: ['PHP', 'Vanilla JavaScript', 'HTML', 'CSS', 'MySQL', 'Hostinger']
    },
    {
      title: 'Academic Technical Consultant',
      company: 'Freelance / Commissions',
      dateRange: 'May 2024 – Present',
      description: 'Supported 6 student‑led ML projects, improving accuracy by 10–25% and enabling 100% project completion.',
      techStacks: ['Python', 'Machine Learning', 'TensorFlow', 'Flask', 'FastAPI', 'Git', 'Next.js', 'Flutter']
    },
  ];
</script>

<section class="space-y-8 pt-30">
  <div class="space-y-6">
    {#each experiences as exp}
      <ExperienceItem
        title={exp.title}
        company={exp.company}
        dateRange={exp.dateRange}
        description={exp.description}
        techStacks={exp.techStacks}
      />
    {/each}
  </div>
</section>