import {
	Database,
	Figma,
	FileCode,
	Github,
	Languages,
	TabletSmartphone,
} from "lucide-react";
import { ReactNode } from "react";

export type SkillDataType = {
	id: number;
	icon?: ReactNode;
	title: string;
	language: string;
};

let SkillsData: SkillDataType[] = [
	{
		id: 1,
		icon: <Figma className="h-8 w-8" />,
		title: "Web Designing",
		language: "Prototyping & UI/UX Designing",
	},

	{
		id: 2,
		icon: <Github className="h-8 w-8" />,
		title: "Version Control",
		language: "Git, GitHub",
	},
	{
		id: 3,
		icon: <TabletSmartphone className="h-8 w-8" />,
		title: "Web Optimization",
		language: "Responsive Designing & SEO",
	},
	{
		id: 4,
		icon: <FileCode className="h-8 w-8" />,
		title: "Development",
		language: "Next.js, Flutter, Vite",
	},
	{
		id: 5,
		icon: <Database className="h-8 w-8" />,
		title: "Databases",
		language: "Realm, MongoDB, Prisma, MySQL",
	},
	{
		id: 6,
		icon: <Languages className="h-8 w-8" />,
		title: "Languages",
		language: "HTML5, CSS3, JavaScript, TypeScript, Dart",
	},
];

export default SkillsData;
