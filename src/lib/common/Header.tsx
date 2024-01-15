"use client";

import { Fade as Hamburger } from "hamburger-react";
import { SnowflakeIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

import HeaderData from "@/core/data/HeaderData";

import Logo from "@/lib/Icons/branding/Logo";
import Moon from "@/lib/Icons/header/Moon";
import Sun from "@/lib/Icons/header/Sun";
import SystemIcon from "@/lib/Icons/header/System";
import { IconButton } from "@/lib/components/buttons/IconButton";
import NavLinks from "@/lib/components/header/NavLinks";
import { useSnowMode } from "@/lib/hooks/useSnowMode";
import { usePathname } from "next/navigation";
import SnowFlakes from "./SnowFlakes";

const Header = () => {
	const [isNavBarOpen, setNavBarOpen] = useState(false);
	const { theme, setTheme } = useTheme();
	const pathName = usePathname();

	const { isWinter, toggleSnow } = useSnowMode();

	return (
		<>
			<header
				className={`${pathName == "/" ? "" : ""
					} pl-5 pr-2 sm:px-8 flex py-8 xl:px-24 2xl:px-36 items-center justify-between`}
			>
				<nav className="flex gap-6">
					<Link
						href="/"
						onClick={() => {
							if (isNavBarOpen) {
								setNavBarOpen(false)
							}
						}}
						className="z-10"
					>
						<Logo aria-label="Logo" className="w-8" />
					</Link>

					<ul
						onClick={() => {
							if (isNavBarOpen) {
								setNavBarOpen(false)
							}
						}}
						className={`md:flex md:items-center z-[1] lg:z-auto text-center md:z-auto md:static absolute w-full left-0 md:w-auto dark:bg-altBackground md:dark:bg-transparent backdrop-blur md:backdrop-blur-none md:py-0 space-x-4 transition-all ease-in duration-400 ${isNavBarOpen ? "top-[95px]" : "top-[-400px]"
							} `}
					>
						{HeaderData.map((navItem, id) => (
							<NavLinks key={id} id={id} navItem={navItem} />
						))}
					</ul>
				</nav>

				<span className="flex items-center gap-4 z-10 ">
					<IconButton
						onClick={toggleSnow}
						title={` ${isWinter ? "Toggle snow off" : "Toggle snow on"} `}
					>
						<SnowflakeIcon className={`${isWinter && "text-blue-500"}`} />
					</IconButton>
					{theme === "system" ? (
						<IconButton
							onClick={() => setTheme("light")}
							title="Follows System"
						>
							<SystemIcon />
						</IconButton>
					) : theme === "light" ? (
						<IconButton
							onClick={() => setTheme("dark")}
							title="Using Light Theme"
						>
							<Sun />
						</IconButton>
					) : (
						<IconButton
							onClick={() => setTheme("system")}
							title="Using Dark Theme"
						>
							<Moon />
						</IconButton>
					)}
					<span className="md:hidden z-10">
						<Hamburger
							toggled={isNavBarOpen}
							toggle={setNavBarOpen}
							size={24}
							rounded
							label="Show menu"
							hideOutline
							duration={0.4}
						/>
					</span>
				</span>
			</header>
			<SnowFlakes isWinter={isWinter} />
		</>
	);
};

export default Header;
