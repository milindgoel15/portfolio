import {
	Bug,
	Database,
	GitBranch,
	Layers,
	Layout,
	Network,
	PenTool,
	Server,
	Shield,
} from "lucide-react";
import { ReactNode } from "react";

export type SkillDataType = {
	id: number;
	icon?: ReactNode;
	title: string;
	language: string;
};

const SkillsData: SkillDataType[] = [
	{
		id: 1,
		icon: <Layout className="h-8 w-8" />,
		title: "Frontend Engineering",
		language:
			"React.js, Next.js, Flutter, React Native, SPA Architecture, Component Design, Responsive UI",
	},
	{
		id: 2,
		icon: <Layers className="h-8 w-8" />,
		title: "System Design & Architecture",
		language: "Modular Architecture, Separation of Concerns, State Management",
	},
	{
		id: 3,
		icon: <Server className="h-8 w-8" />,
		title: "Backend Integration",
		language: "Node.js, REST APIs, JWT Authentication, Error Handling, Service Integration",
	},
	{
		id: 4,
		icon: <Database className="h-8 w-8" />,
		title: "Databases & Persistence",
		language: "MongoDB, SQL, Prisma, Data Modeling",
	},
	{
		id: 5,
		icon: <Network className="h-8 w-8" />,
		title: "Networking & Protocols",
		language: "TCP/IP, DNS, SMTP, API Communication, Network Debugging",
	},
	{
		id: 6,
		icon: <Shield className="h-8 w-8" />,
		title: "Infrastructure & Security",
		language: "TLS/SSL, PKI, Certificates, DKIM, SPF, DMARC, OpenSSL, Shell Scripting",
	},
	{
		id: 7,
		icon: <Bug className="h-8 w-8" />,
		title: "Reliability & Debugging",
		language: "Root Cause Analysis, API Fallbacks, Logging, Performance Optimization",
	},
	{
		id: 8,
		icon: <GitBranch className="h-8 w-8" />,
		title: "Version Control",
		language: "Git, GitHub",
	},
	{
		id: 9,
		icon: <PenTool className="h-8 w-8" />,
		title: "UI/UX Collaboration",
		language: "Figma, Design Handoff, Accessibility",
	},
];

export default SkillsData;
