import { mailLink, telegramUrl } from "@/core/constants";
import Email from "@/lib/Icons/social/Email";
import Telegram from "@/lib/Icons/social/Telegram";
import { ReactNode } from "react";

export type ContactDataType = {
	id: number;
	social: string;
	username: string;
	link: string;
	image: ReactNode;
};

const ContactData: ContactDataType[] = [
	{
		id: 1,
		social: "Telegram",
		username: "@milindgoel15",
		link: telegramUrl,
		image: (
			<Telegram
				className="fill-black dark:fill-white h-6 w-6"
				aria-label="Telegram"
			/>
		),
	},
	{
		id: 2,
		social: "Email",
		username: "milindgoel15@gmail.com",
		link: mailLink,
		image: (
			<Email
				className="fill-black dark:fill-white h-6 w-6"
				aria-label="Email"
			/>
		),
	},
];

export default ContactData;
