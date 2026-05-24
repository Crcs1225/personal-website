export type ContactLinkKind = 'github' | 'linkedin' | 'email';
export type ProjectLinkKind = 'live' | 'code';
export type SectionId = 'top' | 'about' | 'skills' | 'projects' | 'experience' | 'contact';

export interface ContactLink {
	readonly kind: ContactLinkKind;
	readonly label: string;
	readonly href: string;
	readonly ariaLabel?: string;
}

export interface ProfileAboutFact {
	readonly label: string;
	readonly value: string;
}

export interface ProfileAboutContent {
	readonly facts: readonly ProfileAboutFact[];
	readonly paragraphs: readonly string[];
}

export interface ProfileContent {
	readonly name: string;
	readonly role: string;
	readonly summary: string;
	readonly availability: string;
	readonly education: string;
	readonly focus: string;
	readonly location: string;
	readonly about: ProfileAboutContent;
	readonly contactLinks: readonly ContactLink[];
}

export interface SkillCategory {
	readonly title: string;
	readonly skills: readonly string[];
}

export interface PortfolioDate {
	readonly year: number;
	readonly month: number;
}

export interface ExperienceEntry {
	readonly title: string;
	readonly company: string;
	readonly startDate: PortfolioDate;
	readonly endDate: PortfolioDate | null;
	readonly description: string;
	readonly technologies: readonly string[];
}

export interface ProjectLink {
	readonly kind: ProjectLinkKind;
	readonly label: string;
	readonly href: string;
}

export interface ProjectImage {
	readonly src: string;
	readonly alt: string;
}

export interface ProjectEntry {
	readonly image: ProjectImage;
	readonly title: string;
	readonly description: string;
	readonly links: readonly ProjectLink[];
	readonly technologies: readonly string[];
}
