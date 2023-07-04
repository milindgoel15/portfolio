import Email from "../Icons/Email";
import GitHub from "../Icons/GitHub";
import Instagram from "../Icons/Instagram";
import LinkedIn from "../Icons/LinkedIn";
import Telegram from "../Icons/Telegram";
import YouTube from "../Icons/YouTube";
import ContactDataInterface from "../interfaces/ContactDataInterface";

let ContactData: ContactDataInterface[] = [
	{
		id: 1,
		social: "LinkedIn",
		username: "@milindgoel15",
		link: "https://linkedin.com/in/milindgoel15",
		image: <LinkedIn aria-label="LinkedIn" />,
	},
	{
		id: 2,
		social: "Telegram",
		username: "@milindgoel15",
		link: "https://telegram.me/milindgoel15",
		image: <Telegram aria-label="Telegram" />,
	},
	{
		id: 3,
		social: "Email",
		username: "milindgoel15@gmail.com",
		link: "mailto:milindgoel15@gmail.com",
		image: <Email aria-label="Email" />,
	},
	{
		id: 4,
		social: "YouTube",
		username: "@milindgoel15",
		link: "https://youtube.com/milindgoel15",
		image: <YouTube aria-label="YouTube" />,
	},
	{
		id: 5,
		social: "GitHub",
		username: "@milindgoel15",
		link: "https://github.com/milindgoel15",
		image: <GitHub aria-label="GitHub" />,
	},
	{
		id: 6,
		social: "Instagram",
		username: "@milindgoel15",
		link: "https://instagram.com/milindgoel15",
		image: <Instagram aria-label="Instagram" />,
	},
];

export default ContactData;
