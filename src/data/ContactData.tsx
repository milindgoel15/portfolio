import Email from "@/src/Icons/social/Email";
import GitHub from "@/src/Icons/social/GitHub";
import Instagram from "@/src/Icons/social/Instagram";
import LinkedIn from "@/src/Icons/social/LinkedIn";
import Telegram from "@/src/Icons/social/Telegram";
import YouTube from "@/src/Icons/social/YouTube";
import ContactDataInterface from "../interfaces/ContactDataInterface";

let ContactData: ContactDataInterface[] = [
	{
		id: 1,
		social: "LinkedIn",
		username: "@milindgoel15",
		link: "https://linkedin.com/in/milindgoel15",
		image: (
			<LinkedIn
				className="fill-black dark:fill-white h-10 w-10"
				aria-label="LinkedIn"
			/>
		),
	},
	{
		id: 2,
		social: "Telegram",
		username: "@milindgoel15",
		link: "https://telegram.me/milindgoel15",
		image: (
			<Telegram
				className="fill-black dark:fill-white h-10 w-10"
				aria-label="Telegram"
			/>
		),
	},
	{
		id: 3,
		social: "Email",
		username: "milindgoel15@gmail.com",
		link: "mailto:milindgoel15@gmail.com",
		image: (
			<Email
				className="fill-black dark:fill-white h-10 w-10"
				aria-label="Email"
			/>
		),
	},
	{
		id: 4,
		social: "YouTube",
		username: "@milindgoel15",
		link: "https://youtube.com/milindgoel15",
		image: (
			<YouTube
				className="fill-black dark:fill-white h-10 w-10"
				aria-label="YouTube"
			/>
		),
	},
	{
		id: 5,
		social: "GitHub",
		username: "@milindgoel15",
		link: "https://github.com/milindgoel15",
		image: (
			<GitHub
				className="fill-black dark:fill-white h-10 w-10"
				aria-label="GitHub"
			/>
		),
	},
	{
		id: 6,
		social: "Instagram",
		username: "@milindgoel15",
		link: "https://instagram.com/milindgoel15",
		image: (
			<Instagram
				className="fill-black dark:fill-white h-10 w-10"
				aria-label="Instagram"
			/>
		),
	},
];

export default ContactData;
