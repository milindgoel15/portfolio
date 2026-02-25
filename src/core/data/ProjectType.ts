import { StaticImageData } from "next/image";

type ArchitectureItem = {
	title: string;
	description: string;
};

type MetricItem = {
	title: string;
	value: string;
};

export type ProjectType = {
	title: string;
	slug: string;
	role: string;
	featured: boolean;
	duration: string;
	coverImage: {
		light: StaticImageData;
		dark: StaticImageData;
	};
	techStack: string[];
	liveUrl?: string;
	githubUrl?: string;
	otherUrls?: { label: string; url: string }[];
	overview: string;
	problem: string;
	solution: string;
	architecture: ArchitectureItem[];
	performance?: MetricItem[];
	challenges?: string[];
	impact?: string[];
	lessonsLearned?: string[];
	futureImprovements?: string[];
};
