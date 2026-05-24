# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio as a single-page, section-based SvelteKit landing page that follows the approved mockup direction, uses structured content modules, and removes the old sidebar architecture without adding GSAP yet.

**Architecture:** The implementation replaces the current flat `src/lib/components` setup with a section-oriented structure. `src/routes/+page.svelte` becomes a thin composer, content moves into typed data modules, shared UI is isolated under `components/ui`, and the app-level shell lives in `components/layout`. Styling is consolidated around global design tokens in `src/app.css` and section-local Tailwind utility composition.

**Tech Stack:** SvelteKit, Svelte 5, TypeScript, Tailwind CSS v4, Vite

---

## File Structure

### Create

- `src/lib/types/portfolio.ts`
- `src/lib/content/profile.ts`
- `src/lib/content/skills.ts`
- `src/lib/content/projects.ts`
- `src/lib/content/experience.ts`
- `src/lib/components/layout/SiteHeader.svelte`
- `src/lib/components/layout/SiteFooter.svelte`
- `src/lib/components/layout/MobileMenu.svelte`
- `src/lib/components/ui/SectionHeading.svelte`
- `src/lib/components/ui/GlassCard.svelte`
- `src/lib/components/ui/SkillCategoryCard.svelte`
- `src/lib/components/ui/ProjectCard.svelte`
- `src/lib/components/ui/ExperienceTimelineItem.svelte`
- `src/lib/components/ui/ContactLink.svelte`
- `src/lib/sections/HeroSection.svelte`
- `src/lib/sections/AboutSection.svelte`
- `src/lib/sections/SkillsSection.svelte`
- `src/lib/sections/ProjectsSection.svelte`
- `src/lib/sections/ExperienceSection.svelte`
- `src/lib/sections/ContactSection.svelte`

### Modify

- `src/routes/+page.svelte`
- `src/routes/+layout.svelte`
- `src/app.css`
- `src/lib/index.ts`

### Delete

- `src/lib/components/LeftColumn.svelte`
- `src/lib/components/Socials.svelte`
- `src/lib/components/ExperienceItem.svelte`
- `src/lib/components/ProjectCard.svelte`
- `src/lib/components/SocialItems.svelte`
- `src/lib/components/Experience.svelte`
- `src/lib/components/About.svelte`
- `src/lib/components/Hero.svelte`
- `src/lib/components/Menu.svelte`
- `src/lib/components/Projects.svelte`
- `src/lib/components/Footer.svelte`

---

### Task 1: Define Portfolio Types And Content Modules

**Files:**

- Create: `src/lib/types/portfolio.ts`
- Create: `src/lib/content/profile.ts`
- Create: `src/lib/content/skills.ts`
- Create: `src/lib/content/projects.ts`
- Create: `src/lib/content/experience.ts`
- Modify: `src/lib/index.ts`
- Test: `npm run check`

- [ ] **Step 1: Write the type definitions**

```ts
export type SectionId = 'about' | 'skills' | 'projects' | 'experience' | 'contact';

export interface ProfileLink {
	label: string;
	href: string;
	icon: 'mail' | 'github' | 'linkedin';
}

export interface ProfileContent {
	name: string;
	role: string;
	status: string;
	summary: string;
	aboutHeading: string;
	aboutBody: string[];
	location: string;
	focus: string;
	education: string;
	email: string;
	resumeHref?: string;
	links: ProfileLink[];
}

export interface SkillCategory {
	title: string;
	items: string[];
}

export interface ProjectItem {
	title: string;
	description: string;
	imagePath: string;
	liveHref?: string;
	codeHref?: string;
	techStack: string[];
}

export interface ExperienceItem {
	company: string;
	role: string;
	dateRange: string;
	description: string[];
	highlighted?: boolean;
}
```

- [ ] **Step 2: Populate structured content modules from current repo facts**

```ts
// src/lib/content/profile.ts
import type { ProfileContent } from '$lib/types/portfolio';

export const profile: ProfileContent = {
	name: 'Marc Daniel Caracas',
	role: 'Junior AI & Full-Stack Developer',
	status: 'Available for Work',
	summary:
		'Building real-world systems, AI-driven workflows, and production-ready applications for the modern web.',
	aboutHeading: 'Computer Science Graduate and Production Systems Enthusiast.',
	aboutBody: [
		'With a foundation in Computer Science, I build practical web and mobile products with a focus on delivery, maintainability, and integrations.',
		'I am especially interested in AI automation, applied machine learning, and full-stack systems that solve operational problems in real environments.'
	],
	location: 'Pangasinan, Philippines',
	focus: 'AI and Full-Stack',
	education: 'BS Computer Science',
	email: 'your-real-email@example.com',
	links: []
};
```

- [ ] **Step 3: Export content entry points**

```ts
export { profile } from './content/profile';
export { skillCategories } from './content/skills';
export { projects } from './content/projects';
export { experiences } from './content/experience';
export type {
	ExperienceItem,
	ProfileContent,
	ProfileLink,
	ProjectItem,
	SectionId,
	SkillCategory
} from './types/portfolio';
```

- [ ] **Step 4: Run type verification**

Run: `npm run check`
Expected: PASS with no TypeScript or Svelte errors from the new modules

- [ ] **Step 5: Commit**

```bash
git add src/lib/types/portfolio.ts src/lib/content/profile.ts src/lib/content/skills.ts src/lib/content/projects.ts src/lib/content/experience.ts src/lib/index.ts
git commit -m "refactor: extract portfolio content modules"
```

### Task 2: Build Shared Layout And UI Primitives

**Files:**

- Create: `src/lib/components/layout/SiteHeader.svelte`
- Create: `src/lib/components/layout/SiteFooter.svelte`
- Create: `src/lib/components/layout/MobileMenu.svelte`
- Create: `src/lib/components/ui/SectionHeading.svelte`
- Create: `src/lib/components/ui/GlassCard.svelte`
- Create: `src/lib/components/ui/SkillCategoryCard.svelte`
- Create: `src/lib/components/ui/ProjectCard.svelte`
- Create: `src/lib/components/ui/ExperienceTimelineItem.svelte`
- Create: `src/lib/components/ui/ContactLink.svelte`
- Test: `npm run check`

- [ ] **Step 1: Create the reusable section heading and glass card**

```svelte
<!-- src/lib/components/ui/SectionHeading.svelte -->
<script lang="ts">
	export let eyebrow = '';
	export let title: string;
	export let accent = '';
	export let description = '';
</script>

<div class="space-y-4">
	{#if eyebrow}<p class="font-mono text-xs uppercase tracking-[0.24em] text-primary/80">
			{eyebrow}
		</p>{/if}
	<h2 class="text-4xl font-semibold tracking-tight text-white md:text-5xl">
		{title}
		{#if accent}<span class="text-gradient">{accent}</span>{/if}
	</h2>
	{#if description}<p class="max-w-2xl text-base text-muted md:text-lg">{description}</p>{/if}
</div>
```

```svelte
<!-- src/lib/components/ui/GlassCard.svelte -->
<div class="glass-card rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
	<slot />
</div>
```

- [ ] **Step 2: Create header and mobile menu shell**

```svelte
<!-- src/lib/components/layout/SiteHeader.svelte -->
<script lang="ts">
	import type { SectionId } from '$lib/types/portfolio';
	import MobileMenu from './MobileMenu.svelte';

	export let name: string;
	export let navItems: { id: SectionId; label: string }[];
	export let resumeHref: string | undefined;
	let mobileOpen = false;
</script>
```

```svelte
<!-- src/lib/components/layout/MobileMenu.svelte -->
<script lang="ts">
	import type { SectionId } from '$lib/types/portfolio';

	export let open = false;
	export let navItems: { id: SectionId; label: string }[] = [];
</script>
```

- [ ] **Step 3: Create project, experience, skills, and contact UI atoms**

```svelte
<!-- src/lib/components/ui/ProjectCard.svelte -->
<script lang="ts">
	import type { ProjectItem } from '$lib/types/portfolio';
	export let project: ProjectItem;
</script>
```

```svelte
<!-- src/lib/components/ui/ExperienceTimelineItem.svelte -->
<script lang="ts">
	import type { ExperienceItem } from '$lib/types/portfolio';
	export let item: ExperienceItem;
</script>
```

- [ ] **Step 4: Run type verification**

Run: `npm run check`
Expected: PASS with all shared components compiling

- [ ] **Step 5: Commit**

```bash
git add src/lib/components/layout src/lib/components/ui
git commit -m "feat: add portfolio layout and ui primitives"
```

### Task 3: Implement Section Components With Real Content

**Files:**

- Create: `src/lib/sections/HeroSection.svelte`
- Create: `src/lib/sections/AboutSection.svelte`
- Create: `src/lib/sections/SkillsSection.svelte`
- Create: `src/lib/sections/ProjectsSection.svelte`
- Create: `src/lib/sections/ExperienceSection.svelte`
- Create: `src/lib/sections/ContactSection.svelte`
- Test: `npm run check`

- [ ] **Step 1: Create the hero and about sections**

```svelte
<!-- src/lib/sections/HeroSection.svelte -->
<script lang="ts">
	import { profile } from '$lib/content/profile';
</script>

<section
	class="relative flex min-h-[calc(100svh-5rem)] items-center justify-center px-6 py-28 md:px-10"
>
	<!-- hero content -->
</section>
```

```svelte
<!-- src/lib/sections/AboutSection.svelte -->
<script lang="ts">
	import { profile } from '$lib/content/profile';
	import GlassCard from '$lib/components/ui/GlassCard.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
</script>
```

- [ ] **Step 2: Create the skills and projects sections**

```svelte
<!-- src/lib/sections/SkillsSection.svelte -->
<script lang="ts">
	import { skillCategories } from '$lib/content/skills';
</script>
```

```svelte
<!-- src/lib/sections/ProjectsSection.svelte -->
<script lang="ts">
	import { projects } from '$lib/content/projects';
	import ProjectCard from '$lib/components/ui/ProjectCard.svelte';
</script>
```

- [ ] **Step 3: Create the experience and contact sections**

```svelte
<!-- src/lib/sections/ExperienceSection.svelte -->
<script lang="ts">
	import { experiences } from '$lib/content/experience';
</script>
```

```svelte
<!-- src/lib/sections/ContactSection.svelte -->
<script lang="ts">
	import { profile } from '$lib/content/profile';
</script>
```

- [ ] **Step 4: Run type verification**

Run: `npm run check`
Expected: PASS with all sections rendering through typed content

- [ ] **Step 5: Commit**

```bash
git add src/lib/sections
git commit -m "feat: add section-based portfolio composition"
```

### Task 4: Replace Route Composition And Remove Legacy Sidebar Layout

**Files:**

- Modify: `src/routes/+page.svelte`
- Modify: `src/routes/+layout.svelte`
- Delete: `src/lib/components/LeftColumn.svelte`
- Delete: `src/lib/components/Socials.svelte`
- Delete: `src/lib/components/ExperienceItem.svelte`
- Delete: `src/lib/components/ProjectCard.svelte`
- Delete: `src/lib/components/SocialItems.svelte`
- Delete: `src/lib/components/Experience.svelte`
- Delete: `src/lib/components/About.svelte`
- Delete: `src/lib/components/Hero.svelte`
- Delete: `src/lib/components/Menu.svelte`
- Delete: `src/lib/components/Projects.svelte`
- Delete: `src/lib/components/Footer.svelte`
- Test: `npm run check`

- [ ] **Step 1: Replace `+page.svelte` with a thin section composer**

```svelte
<script lang="ts">
	import SiteHeader from '$lib/components/layout/SiteHeader.svelte';
	import SiteFooter from '$lib/components/layout/SiteFooter.svelte';
	import HeroSection from '$lib/sections/HeroSection.svelte';
	import AboutSection from '$lib/sections/AboutSection.svelte';
	import SkillsSection from '$lib/sections/SkillsSection.svelte';
	import ProjectsSection from '$lib/sections/ProjectsSection.svelte';
	import ExperienceSection from '$lib/sections/ExperienceSection.svelte';
	import ContactSection from '$lib/sections/ContactSection.svelte';
	import { profile } from '$lib/content/profile';

	const navItems = [
		{ id: 'projects', label: 'Projects' },
		{ id: 'about', label: 'About' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'contact', label: 'Contact' }
	] as const;
</script>
```

- [ ] **Step 2: Simplify `+layout.svelte` into the app-level frame**

```svelte
<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';
</script>

<svelte:head>
	<title>Marc Daniel Caracas | Full-Stack & AI Developer</title>
	<link rel="icon" type="image/png" href={favicon} />
</svelte:head>

<div class="app-shell">
	<slot />
</div>
```

- [ ] **Step 3: Remove the legacy component set after route migration**

Run:

```bash
git rm src/lib/components/LeftColumn.svelte src/lib/components/Socials.svelte src/lib/components/ExperienceItem.svelte src/lib/components/ProjectCard.svelte src/lib/components/SocialItems.svelte src/lib/components/Experience.svelte src/lib/components/About.svelte src/lib/components/Hero.svelte src/lib/components/Menu.svelte src/lib/components/Projects.svelte src/lib/components/Footer.svelte
```

Expected: files deleted with no remaining imports

- [ ] **Step 4: Run type verification**

Run: `npm run check`
Expected: PASS with no imports from deleted sidebar-era components

- [ ] **Step 5: Commit**

```bash
git add src/routes/+page.svelte src/routes/+layout.svelte
git commit -m "refactor: replace sidebar portfolio architecture"
```

### Task 5: Apply The New Visual System In Global Styles

**Files:**

- Modify: `src/app.css`
- Test: `npm run check`

- [ ] **Step 1: Replace the current global styles with design tokens and utility classes**

```css
@import 'tailwindcss';
@plugin '@tailwindcss/forms';
@plugin '@tailwindcss/typography';

:root {
	--color-bg: #0a0a0a;
	--color-surface: #131313;
	--color-surface-2: #1c1b1b;
	--color-text: #e5e2e1;
	--color-muted: #b7b4c7;
	--color-primary: #c0c1ff;
	--color-primary-strong: #8083ff;
	--color-secondary: #d0bcff;
}

html {
	scroll-behavior: smooth;
}

body {
	background:
		radial-gradient(circle at top left, rgb(128 131 255 / 0.16), transparent 28%),
		radial-gradient(circle at bottom right, rgb(87 27 193 / 0.14), transparent 30%), var(--color-bg);
	color: var(--color-text);
	font-family: 'Geist', sans-serif;
}
```

- [ ] **Step 2: Add shared helper classes used by the new components**

```css
.glass-card {
	background: rgb(17 17 17 / 0.72);
	backdrop-filter: blur(16px);
}

.text-gradient {
	background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.text-muted {
	color: var(--color-muted);
}
```

- [ ] **Step 3: Run verification**

Run: `npm run check`
Expected: PASS with no invalid CSS imports or class references

- [ ] **Step 4: Commit**

```bash
git add src/app.css
git commit -m "style: add landing-page portfolio visual system"
```

### Task 6: Final Verification And Cleanup

**Files:**

- Modify: `src/lib/index.ts` if export cleanup is still needed
- Test: `npm run check`
- Test: `npm run lint`
- Test: `npm run build`

- [ ] **Step 1: Verify barrel exports and remove dead references**

```ts
export { profile } from './content/profile';
export { skillCategories } from './content/skills';
export { projects } from './content/projects';
export { experiences } from './content/experience';
```

- [ ] **Step 2: Run static analysis**

Run: `npm run lint`
Expected: PASS with Prettier and ESLint succeeding

- [ ] **Step 3: Run framework and type verification**

Run: `npm run check`
Expected: PASS with zero Svelte or TypeScript errors

- [ ] **Step 4: Run production build**

Run: `npm run build`
Expected: PASS with Vite and SvelteKit build completing successfully

- [ ] **Step 5: Commit**

```bash
git add src package.json package-lock.json
git commit -m "feat: launch redesigned portfolio interface"
```

## Self-Review

### Spec coverage

- Single-page no-reload structure: covered in Tasks 3 and 4.
- Section-based architecture: covered in Tasks 1 through 4.
- Mockup-first redesign: covered in Tasks 2, 3, and 5.
- Real content source of truth: covered in Task 1.
- Placeholder portrait and practical contact: covered in Task 3.
- GSAP deferred: preserved by scope across all tasks.

### Placeholder scan

- No `TODO`, `TBD`, or deferred “implement later” instructions remain in task steps.
- Risk-based fallbacks are described in the spec, not left undefined in the plan.

### Type consistency

- Shared type names are defined in Task 1 and reused consistently in Tasks 2 through 6.
- Section IDs are kept consistent with the approved anchor list.
