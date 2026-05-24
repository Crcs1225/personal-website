# Portfolio Redesign Design

## Summary

Revamp the existing SvelteKit portfolio into a single-page, section-based site that closely follows the provided mockup's visual direction while preserving the current portfolio content as the factual source of truth. The first pass prioritizes interface, structure, and content presentation. GSAP and other richer motion work are intentionally deferred until after the redesign is stable.

## Goals

- Replace the current split left-column portfolio layout with a landing-page-style composition.
- Keep the experience on a single page with anchored navigation and no full-page reload flow.
- Reorganize the app into section-based and component-based folders with clearer boundaries.
- Move hardcoded portfolio data out of Svelte components into typed content modules.
- Match the mockup's dark glassmorphism aesthetic closely in the first pass.
- Use current real portfolio content, refining phrasing where needed without inventing credentials or work.

## Non-Goals

- Adding GSAP animations in this phase.
- Building a backend contact form or third-party submission flow.
- Expanding the site into multiple routes unless later requested.
- Creating fictional projects, links, metrics, or work history.

## Current Problems

- `src/routes/+page.svelte` owns layout composition, navigation state, scroll logic, and GSAP orchestration.
- `src/lib/components` is a flat bucket with mixed concerns.
- Experience and project content are hardcoded inside render components.
- The current layout reflects a sidebar portfolio pattern instead of the target landing-page direction.
- Assets and reusable content conventions are not yet standardized.

## Product Direction

The new site remains a single SvelteKit page with smooth in-page navigation. It adopts the mockup's structure and tone:

- Fixed translucent top navigation.
- Centered hero with strong type hierarchy and CTA row.
- Dark premium background with atmospheric glow treatments.
- Glass-card surfaces for structured content.
- Clear section rhythm for About, Skills, Projects, Experience, and Contact.

This is a mockup-first implementation, but not a literal copy-paste conversion. The layout and visual language should strongly resemble the reference while remaining cleanly componentized for SvelteKit.

## Source of Truth

The current portfolio repo content is the source of truth for:

- personal name and role
- biography and positioning
- experience history
- project list
- existing project images and public links

Copy may be rewritten for clarity and professionalism, but not embellished beyond what the repo already supports.

## Information Architecture

The first-pass section order:

1. Navigation
2. Hero
3. About
4. Skills
5. Projects
6. Experience
7. Contact
8. Footer

All sections live on one page and are reachable through anchor links from the top navigation.

## Architecture

### Route Strategy

Use a single route:

- `src/routes/+page.svelte`

This file should become a thin page composer that imports a top-level shell and ordered sections. It should not contain large data arrays, layout-specific utility logic, or animation setup.

### Folder Strategy

Refactor toward clear feature boundaries:

```text
src/
  lib/
    assets/
    components/
      layout/
      navigation/
      ui/
    content/
    sections/
    types/
```

Planned responsibility split:

- `components/layout`: app shell pieces such as nav, footer, section wrappers, and mobile menu container.
- `components/navigation`: navigation-specific UI and anchor-link controls.
- `components/ui`: reusable cards, chips, buttons, and contact link rows.
- `sections`: hero, about, skills, projects, experience, and contact section components.
- `content`: typed arrays and structured profile data.
- `types`: shared interfaces for content modules.

### Content Modules

Move portfolio data into dedicated files, for example:

- `src/lib/content/profile.ts`
- `src/lib/content/projects.ts`
- `src/lib/content/experience.ts`
- `src/lib/content/skills.ts`

These modules hold the page's factual content and are imported by section components. This keeps the Svelte files focused on rendering.

## Visual Design

### Visual Language

Follow the mockup closely:

- dark near-black background
- translucent navigation bar
- soft primary and secondary glow accents
- glassmorphism cards with subtle blur and borders
- large headline typography
- mono-styled labels and chips
- spacious vertical rhythm

### Typography

Use a premium editorial/product feel similar to the mockup:

- Geist-style sans for headlines and body
- JetBrains Mono or equivalent mono family for labels, chips, and metadata

The exact font loading approach should fit the current SvelteKit app and avoid unnecessary complexity.

### Responsive Behavior

- Desktop: full landing-page composition with fixed top nav and multi-column section layouts where useful.
- Mobile: stacked sections, collapsible nav/menu behavior, preserved CTA hierarchy, and readable spacing.
- All sections should remain accessible via anchor navigation.

## Section Design

### Navigation

Top fixed nav with:

- site title/name
- anchor links to major sections
- primary CTA for resume download if a real file exists, otherwise a conservative fallback CTA
- mobile menu trigger

### Hero

Centered hero with:

- availability/status badge
- main name lockup
- role descriptor
- concise professional summary
- primary CTA to projects
- secondary CTA to contact

### About

Two-column layout on larger screens:

- placeholder portrait block with polished treatment
- summary card for education/focus/location
- refined biography based on current repo content

No fake portrait source should be introduced in this phase.

### Skills

Dedicated skills section added in this redesign. Skills should be grouped into categories such as:

- frontend
- backend
- AI and automation
- tooling or platforms

Each category should render through reusable card and chip components fed by structured content.

### Projects

Featured project grid using:

- current real project titles
- current real descriptions, refined for readability
- existing images from `static/images` where present
- real links only
- tech stack chips

Cards should visually match the mockup while remaining reusable and data-driven.

### Experience

Timeline or structured milestone presentation using the current real roles and organizations. It should feel cleaner and more premium than the existing list, but remain content-accurate.

### Contact

Contact section should be practical and honest:

- direct email link
- social/profile links if present in source content
- polished form-style presentation

For first pass behavior, use a real `mailto:` path or direct email CTA rather than a fake form submission backend.

### Footer

Simple footer with:

- name/brand
- current year
- key social/contact links

## Interaction Design

First-pass interactions:

- smooth anchor scrolling
- mobile nav toggle
- hover and focus states
- polished button/card transitions

Excluded from this phase:

- GSAP timelines
- scroll-triggered reveal choreography
- heavy stateful project detail modals

The component boundaries should leave room for a later GSAP pass.

## Accessibility and Quality

- Semantic heading order across sections.
- Keyboard-accessible navigation and buttons.
- Sufficient contrast in dark surfaces and muted text.
- Reduced-motion-safe baseline behavior.
- Responsive layout at common mobile and desktop breakpoints.

## Implementation Notes

- Preserve SvelteKit conventions.
- Keep `+page.svelte` small and compositional.
- Prefer typed content modules over inline arrays in section files.
- Standardize asset usage rules during the refactor.
- Do not carry forward the old desktop-sidebar/mobile-split architecture into the new UI.

## Testing and Verification Expectations

At implementation time, verify:

- app builds successfully
- lint/check passes
- section anchors navigate correctly
- mobile menu works
- project cards render real content
- contact CTA uses a real target
- layout works on mobile and desktop

## Risks

- Some mockup elements may assume content not currently present in the repo, especially contact and resume assets. These need conservative fallbacks.
- Typography and spacing can drift into template-like output if not translated carefully into the existing app.
- Refactoring structure and redesigning layout simultaneously increases change surface, so content modules and section boundaries must stay disciplined.

## Approved Direction

Implement the redesign as a single-page, section-based SvelteKit portfolio that closely follows the provided mockup in visual style, uses the current repo content as source of truth, introduces a dedicated skills section, uses a placeholder portrait treatment, keeps contact practical via direct actions, and defers GSAP until after the redesigned content and layout are stable.
