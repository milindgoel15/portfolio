import { HeaderDataType } from "@/core/data/HeaderData";
import { motion } from "framer-motion";
import Link from "next/link";

type NavLinksProps = {
	id: number;
	navItem: HeaderDataType;
	// pathName: string;
};

const NavLinks = ({ id, navItem }: NavLinksProps) => {
	return (
		<>
			<motion.li
				initial={{ opacity: 0, translateY: "10px" }}
				whileInView={{ opacity: 1, translateY: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: id * 0.1 }}
				className="ml-4 my-6 cursor-pointer md:my-0 md:mx-0"
			>
				<Link
					href={navItem.link}
					className={`py-2 md:px-3 text-xl text-black dark:text-white hover:text-blue-600 lg:hover:bg-blue-600 lg:hover:text-white rounded-md transition duration-300`}
					target={navItem.target}
				>
					{navItem.title}
				</Link>
			</motion.li>
		</>
	);
};

export default NavLinks;
