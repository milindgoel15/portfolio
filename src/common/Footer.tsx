import { GithubIcon, InstagramIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import MGLogoFooter from "../Icons/branding/MGLogoFooter";
import Telegram from "../Icons/social/Telegram";

let Footer = (): JSX.Element => {
	return (
		<>
			<footer className="flex flex-col gap-5 items-center md:flex-row md:justify-between py-10 px-4 xl:px-24 2xl:px-48">
				<span className="flex gap-2 items-center order-2 sm:order-1">
					<p>©{new Date().getFullYear()}</p>{" "}
					<Link
						href="http://github.com/milindgoel15"
						target="_blank"
						rel="noopener noreferrer"
					>
						<MGLogoFooter className="w-16" />
					</Link>
				</span>
				<p className="order-3 sm:order-2">
					Made with&nbsp;<span className="text-blue-500">❤</span> in India
				</p>
				<span className="flex gap-4 order-1 sm:order-3">
					<Link href={"https://github.com/milindgoel15"} target="_blank">
						<GithubIcon className="transition-all hover:text-blue-500" />
					</Link>
					<Link href={"https://telegram.me/milindgoel15"} target="_blank">
						<Telegram className="h-6 w-6 transition-all hover:fill-blue-500" />
					</Link>
					<Link href={"mailto:milindgoel15@gmail.com"} target="_blank">
						<MailIcon className="transition-all hover:text-blue-500" />{" "}
					</Link>
					<Link
						href={"https://instagram.com/milindgoel15"}
						target="_blank"
					>
						<InstagramIcon className="transition-all hover:text-blue-500" />{" "}
					</Link>
				</span>
			</footer>
		</>
	);
};

export default Footer;
