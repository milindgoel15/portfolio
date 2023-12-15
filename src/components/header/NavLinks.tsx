import React from "react";
import Link from "next/link";
import { HeaderDataType } from "@/src/data/HeaderData";

type NavLinksProps = {
	navItem: HeaderDataType;
	// pathName: string;
};

const NavLinks = ({ navItem }: NavLinksProps) => {
	return (
		<>
			<li className="ml-4 my-6 cursor-pointer md:my-0 md:mx-0">
				<Link
					href={navItem.link}
					className={`py-2 md:px-3 text-xl text-black dark:text-white hover:text-blue-600 lg:hover:bg-blue-600 lg:hover:text-white rounded-md transition duration-300`}
					target={navItem.target}
				>
					{navItem.title}
				</Link>
			</li>
		</>
	);
};

export default NavLinks;
