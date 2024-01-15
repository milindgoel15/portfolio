import { FolderGit, Globe } from "lucide-react";
import { ReactNode } from "react";

export type WorksDataType = {
	id: number;
	icon: ReactNode;
	title: string;
	desc: string;
	role: string;
	lang: string;
	link: string;
};

const WorksData: WorksDataType[] = [
	{
		id: 1,
		title: "RDMDZN",
		icon: <Globe />,
		desc: "Developed a professional yet personable website for solopreneur UI/UX designer, highlighting their creative process through intuitive navigation.",
		role: "Developer",
		lang: "Next.js, Typescript & TailwindCSS",
		link: "https://rdmdzn.vercel.app",
	},
	{
		id: 2,
		title: "Todoify",
		icon: <FolderGit />,
		desc: "A productivity application, featuring Material Design 3 for Android, designed for both task management and note-taking.",
		role: "Lead developer & Designer",
		lang: "Flutter, Realm DB, Firebase analytics",
		link: "https://github.com/MGAndroidProjects/Todoify-Releases",
	},
	{
		id: 3,
		title: "WeatherWise: Live & Forecast",
		icon: <FolderGit />,
		desc: "A cross-platform live-weather application, with Material Design 3 on both Android and Windows, designed to keep you updated on weather conditions.",
		role: "Lead developer & Designer",
		lang: "Flutter, Firebase Analytics",
		link: "https://github.com/MGAndroidProjects/WeatherWise-Releases",
	},
	{
		id: 4,
		title: "Personal Portfolio - V2.6",
		icon: <FolderGit />,
		desc: "Crafted a personal portfolio website showcasing my work and skills.",
		role: "Lead developer & Designer",
		lang: "Next.js, Typescript & TailwindCSS",
		link: "https://github.com/milindgoel15/portfolio",
	},
	{
		id: 5,
		title: "GenesisOS",
		icon: <Globe />,
		desc: "Developed a website for GenesisOS, a custom aftermarket operating system built on AOSP",
		role: "Developer",
		lang: "Next.js, Typescript & TailwindCSS",
		link: "https://genesisos.dev",
	},
	{
		id: 6,
		title: "Abhishek Goel & Associates",
		icon: <Globe />,
		desc: "Created a professional website for a Chartered Accountant firm, providing an online platform to showcase their services and expertise.",
		role: "Lead developer & Designer",
		lang: "React.js, Vite, Typescript & TailwindCSS",
		link: "https://abhishekgoelandassociates.com",
	},
];

export default WorksData;
