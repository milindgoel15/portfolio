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
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import SnowFlakes from "./SnowFlakes";

const headerVariants = {
	initial: { backgroundColor: "rgba(0,0,0,0)" },
	open: { backgroundColor: "rgba(0,0,0,0.85)", transition: { duration: 0.3 } },
	closed: { backgroundColor: "rgba(0,0,0,0)", transition: { duration: 0.3 } },
};

const mobileMenuVariants = {
	closed: { y: -40, opacity: 0, transition: { duration: 0.25 }, backgroundColor: "rgba(0,0,0,0)" },
	open: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.35, staggerChildren: 0.06 },
		backgroundColor: "rgba(0,0,0,0.85)",
	},
};

const itemVariants = {
	closed: { opacity: 0, y: -8 },
	open: { opacity: 1, y: 0 },
};

const Header = () => {
	const [isNavBarOpen, setNavBarOpen] = useState(false);
	const { theme, setTheme } = useTheme();
	const pathName = usePathname();
	const { isWinter, toggleSnow } = useSnowMode();

	return (
		<>
			<motion.header
				initial="initial"
				animate={isNavBarOpen ? "open" : "closed"}
				variants={headerVariants}
				className={`${
					pathName === "/" ? "" : ""
				} pl-5 pr-2 sm:px-8 flex py-3 sm:py-8 xl:px-24 2xl:px-36 items-center justify-between w-full z-50 backdrop-blur md:backdrop-blur-none`}
			>
				<nav className="flex gap-6 items-center">
					<Link href="/" onClick={() => setNavBarOpen(false)} className="z-10">
						<Logo aria-label="Logo" className="w-8" />
					</Link>

					{/* Desktop Navbar */}
					<ul className="hidden md:flex md:items-center space-x-4">
						{HeaderData.map((navItem, id) => (
							<NavLinks key={id} id={id} navItem={navItem} />
						))}
					</ul>
				</nav>

				<span className="flex items-center gap-4 z-10">
					<IconButton
						onClick={toggleSnow}
						title={`${isWinter ? "Toggle snow off" : "Toggle snow on"}`}
					>
						<SnowflakeIcon className={`${isWinter && "text-blue-500"}`} />
					</IconButton>

					{theme === "system" ? (
						<IconButton onClick={() => setTheme("light")} title="Follows System">
							<SystemIcon />
						</IconButton>
					) : theme === "light" ? (
						<IconButton onClick={() => setTheme("dark")} title="Using Light Theme">
							<Sun />
						</IconButton>
					) : (
						<IconButton onClick={() => setTheme("system")} title="Using Dark Theme">
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

				{/* Mobile Navbar */}
				<AnimatePresence>
					{isNavBarOpen && (
						<motion.ul
							initial="closed"
							animate="open"
							exit="closed"
							variants={mobileMenuVariants}
							onClick={() => setNavBarOpen(false)}
							className="md:hidden absolute top-full left-0 w-full backdrop-blur text-center py-6 space-y-4"
						>
							{HeaderData.map((navItem, id) => (
								<motion.li key={id} variants={itemVariants}>
									<NavLinks id={id} navItem={navItem} />
								</motion.li>
							))}
						</motion.ul>
					)}
				</AnimatePresence>
			</motion.header>

			<SnowFlakes isWinter={isWinter} />
		</>
	);
};

export default Header;
