import { ProjectType } from "@/core/data/ProjectType";

import {
	AGA,
	AGADark,
	Genesisos,
	GenesisosDark,
	Portfolio,
	PortfolioDark,
	rdmdzn,
	rdmdznDark,
	Todoify,
	TodoifyDark,
	WeatherWise,
	WeatherWiseDark,
} from "@/core/images";

export const projects: ProjectType[] = [
	{
		title: "GenesisOS",
		slug: "genesisos",
		role: "Frontend Developer",
		featured: false,
		duration: "2025",
		coverImage: {
			light: Genesisos,
			dark: GenesisosDark,
		},
		techStack: ["Next.js", "TypeScript", "TailwindCSS"],
		liveUrl: "https://genesisos.dev",

		overview:
			"Engineered the official website for GenesisOS, a custom aftermarket Android operating system based on AOSP, focused on clarity, performance, and developer-centric presentation.",

		problem:
			"GenesisOS required a modern platform to present features, documentation, and downloads in a structured and accessible format while maintaining strong performance and SEO.",

		solution:
			"Developed a modular and SEO-optimized website using Next.js, with reusable content sections and scalable UI architecture.",

		architecture: [
			{
				title: "Component-Driven Structure",
				description:
					"Designed reusable sections for feature highlights, documentation previews, and download modules.",
			},
			{
				title: "SEO Optimization",
				description:
					"Implemented structured metadata and optimized routing for better discoverability.",
			},
		],

		performance: [
			{ title: "Page Performance", value: "Optimized for fast load times" },
			{ title: "Image Handling", value: "Next/Image optimization" },
		],

		challenges: [
			"Presenting technical content in a clean and readable format",
			"Balancing branding with performance constraints",
		],

		impact: [
			"Established strong digital presence for GenesisOS",
			"Improved content discoverability through SEO-focused structure",
		],

		lessonsLearned: ["Clarity and content hierarchy are critical for technical websites"],
	},

	{
		title: "RDMDZN",
		slug: "rdmdzn",
		role: "Frontend Developer",
		featured: false,
		duration: "2025",
		coverImage: {
			light: rdmdzn,
			dark: rdmdznDark,
		},
		techStack: ["Next.js", "TypeScript", "TailwindCSS"],
		liveUrl: "https://rdmdzn.vercel.app",

		overview:
			"Developed a professional yet expressive portfolio website for a UI/UX solopreneur, emphasizing storytelling and visual hierarchy.",

		problem:
			"The designer required a digital presence that reflected creativity while maintaining usability and performance.",

		solution:
			"Built a minimal and responsive interface with strong typography and modular layout components to support case studies.",

		architecture: [
			{
				title: "Design-Oriented Layout System",
				description:
					"Implemented flexible layout containers adaptable to visual storytelling and portfolio case studies.",
			},
		],

		challenges: ["Balancing expressive design with performance optimization"],

		impact: ["Enhanced professional branding and client presentation"],

		lessonsLearned: ["Design systems must balance aesthetics and usability"],
	},

	{
		title: "Todoify",
		slug: "todoify",
		role: "Lead Developer & Designer",
		featured: false,
		duration: "2024",
		coverImage: {
			light: Todoify,
			dark: TodoifyDark,
		},
		techStack: ["Flutter", "Realm DB", "Firebase Analytics"],
		githubUrl: "https://github.com/MGAndroidProjects/Todoify-Releases",

		overview:
			"A cross-platform productivity application built with Flutter, designed for task management and note-taking using Material Design 3.",

		problem:
			"Users needed a clean, offline-capable productivity tool with persistent local storage and modern UI standards.",

		solution:
			"Developed a Flutter application with Realm DB for local persistence and Firebase Analytics for behavioral insights.",

		architecture: [
			{
				title: "Offline-First Architecture",
				description: "Implemented Realm DB to ensure fast and reliable local data storage.",
			},
			{
				title: "Modular State Management",
				description: "Structured feature modules for scalability and maintainability.",
			},
		],

		performance: [{ title: "Local Database", value: "High-speed data persistence" }],

		challenges: ["Managing state across multiple features", "Designing scalable data models"],

		impact: ["Delivered smooth, responsive productivity experience"],

		lessonsLearned: ["Proper state separation improves Flutter app maintainability"],
	},

	{
		title: "WeatherWise: Live & Forecast",
		slug: "weatherwise",
		role: "Lead Developer & Designer",
		featured: true,
		duration: "2024",
		coverImage: {
			light: WeatherWise,
			dark: WeatherWiseDark,
		},
		techStack: ["Flutter", "Firebase Analytics"],
		githubUrl: "https://github.com/MGAndroidProjects/WeatherWise-Releases",
		liveUrl: "https://play.google.com/store/apps/details?id=com.mgprojects.weatherwise",

		otherUrls: [
			{
				label: "Privacy Policy",
				url: "/works/weatherwise/privacypolicy",
			},
		],

		overview:
			"A cross-platform live weather and forecast application built using Flutter and Material Design 3.",

		problem:
			"Users required real-time weather tracking across Android and Windows platforms with consistent and minimal UI.",

		solution:
			"Integrated structured weather API services and modular UI components to deliver a seamless cross-platform experience.",

		architecture: [
			{
				title: "Service Layer Architecture",
				description: "Separated API handling from UI components to improve maintainability.",
			},
		],

		challenges: [
			"Efficient handling of real-time data updates",
			"Maintaining UI consistency across platforms",
		],

		impact: ["Delivered consistent weather tracking experience across devices"],

		lessonsLearned: ["Separation of service and UI logic enhances scalability"],
	},

	{
		title: "Personal Portfolio",
		slug: "personal-portfolio",
		role: "Lead Developer & Designer",
		featured: true,
		duration: "2024",
		coverImage: {
			light: Portfolio,
			dark: PortfolioDark,
		},
		techStack: ["Next.js", "TypeScript", "TailwindCSS"],
		githubUrl: "https://github.com/milindgoel15/portfolio",

		overview:
			"A high-performance personal portfolio engineered with modular architecture and strict type safety.",

		problem:
			"Required a scalable system for structured case studies while maintaining performance and clean UI.",

		solution:
			"Built a reusable case study framework powered by dynamic routing and composable UI components.",

		architecture: [
			{
				title: "Scalable Case Study System",
				description:
					"Designed structured project model supporting preview, listing, and detailed case study pages.",
			},
		],

		impact: ["Demonstrates production-grade frontend engineering approach"],

		lessonsLearned: ["Data modeling should precede UI development"],
	},

	{
		title: "Abhishek Goel & Associates",
		slug: "abhishek-goel-associates",
		role: "Lead Developer & Designer",
		featured: false,
		duration: "2025",
		coverImage: {
			light: AGA,
			dark: AGADark,
		},
		techStack: ["React.js", "Vite", "TypeScript", "TailwindCSS"],
		liveUrl: "https://abhishekgoelandassociates.com",

		overview:
			"Developed a professional website for a Chartered Accountant firm to establish strong digital presence.",

		problem:
			"The firm required a clean and trustworthy platform to showcase services and expertise online.",

		solution:
			"Built a structured, responsive website emphasizing clarity, accessibility, and performance.",

		architecture: [
			{
				title: "Lightweight React Architecture",
				description: "Used Vite for optimized builds and fast development workflow.",
			},
		],

		impact: [
			"Strengthened firm's digital visibility",
			"Improved accessibility of service information",
		],

		lessonsLearned: ["Professional branding benefits from simplicity and clarity"],
	},
];
