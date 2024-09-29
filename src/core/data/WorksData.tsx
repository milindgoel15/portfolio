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
import { FolderGit, Globe } from "lucide-react";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type WorksDataType = {
	// id: number;
	icon: ReactNode;
	image: StaticImageData;
	imageDark: StaticImageData;
	title: string;
	desc: string;
	role: string;
	lang: string;
	link: string;
};

const WorksData: WorksDataType[] = [
	{
		title: "GenesisOS",
		icon: <Globe className="w-5 h-5" />,
		image: Genesisos,
		imageDark: GenesisosDark,
		desc: "Developed a website for GenesisOS, a custom aftermarket operating system built on AOSP",
		role: "Developer",
		lang: "Next.js, Typescript & TailwindCSS",
		link: "https://genesisos.dev",
	},
	{
		title: "RDMDZN",
		icon: <Globe className="w-5 h-5" />,
		image: rdmdzn,
		imageDark: rdmdznDark,
		desc: "Developed a professional yet personable website for solopreneur UI/UX designer, highlighting their creative process through intuitive navigation.",
		role: "Developer",
		lang: "Next.js, Typescript & TailwindCSS",
		link: "https://rdmdzn.vercel.app",
	},
	{
		title: "Todoify",
		icon: <FolderGit className="w-5 h-5" />,
		image: Todoify,
		imageDark: TodoifyDark,
		desc: "A productivity application, featuring Material Design 3 for Android, designed for both task management and note-taking.",
		role: "Lead developer & Designer",
		lang: "Flutter, Realm DB, Firebase analytics",
		link: "https://github.com/MGAndroidProjects/Todoify-Releases",
	},
	{
		title: "WeatherWise: Live & Forecast",
		icon: <FolderGit className="w-5 h-5" />,
		image: WeatherWise,
		imageDark: WeatherWiseDark,
		desc: "A cross-platform live-weather application, with Material Design 3 on both Android and Windows, designed to keep you updated on weather conditions.",
		role: "Lead developer & Designer",
		lang: "Flutter, Firebase Analytics",
		link: "https://github.com/MGAndroidProjects/WeatherWise-Releases",
	},
	{
		title: "Personal Portfolio",
		icon: <FolderGit className="w-5 h-5" />,
		image: Portfolio,
		imageDark: PortfolioDark,
		desc: "Crafted a personal portfolio website showcasing my work and skills.",
		role: "Lead developer & Designer",
		lang: "Next.js, Typescript & TailwindCSS",
		link: "https://github.com/milindgoel15/portfolio",
	},

	{
		title: "Abhishek Goel & Associates",
		icon: <Globe className="w-5 h-5" />,
		image: AGA,
		imageDark: AGADark,
		desc: "Created a professional website for a Chartered Accountant firm, providing an online platform to showcase their services and expertise.",
		role: "Lead developer & Designer",
		lang: "React.js, Vite, Typescript & TailwindCSS",
		link: "https://abhishekgoelandassociates.com",
	},
];

export default WorksData;
