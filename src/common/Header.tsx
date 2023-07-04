import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Fade as Hamburger } from "hamburger-react";
import HeaderData from "../data/HeaderData";
import NavLinks from "../partials/NavLinks";
import Moon from "../Icons/Moon";
import Sun from "../Icons/Sun";
import SystemIcon from "../Icons/System";
import ThemeButton from "./ThemeButton";
import Logo from "../Icons/Logo";

let Header = () => {
	let [isNavBarOpen, setNavBarOpen] = useState(false);
	let { theme, setTheme } = useTheme();
	let [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<>
			<header className="max-w-7xl mx-auto pl-8 pr-4 sm:px-8 md:mx-8 flex xl:mx-auto h-24 items-center justify-between">
				<Link
					href="/"
					onClick={() => setNavBarOpen(false)}
					className="z-10 cursor-pointer"
				>
					<Logo aria-label="Logo" className="w-8" />
				</Link>

				<nav className="flex gap-6">
					<div className="flex justify-center gap-5 items-center">
						<span className="flex items-center z-10 ">
							{theme === "system" ? (
								<ThemeButton
									theme="light"
									setTheme={setTheme}
									buttonLabel="Follows System"
								>
									<SystemIcon />
								</ThemeButton>
							) : theme === "light" ? (
								<ThemeButton
									theme="dark"
									setTheme={setTheme}
									buttonLabel="Using Light Theme"
								>
									<Sun />
								</ThemeButton>
							) : (
								<ThemeButton
									theme="system"
									setTheme={setTheme}
									buttonLabel="Using Dark Theme"
								>
									<Moon />
								</ThemeButton>
							)}
						</span>
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
					</div>

					<ul
						onClick={() => setNavBarOpen(false)}
						className={`md:flex md:items-center z-[1]  text-center md:z-auto md:static absolute w-full left-0 md:w-auto dark:bg-secondary md:dark:bg-transparent backdrop-blur md:backdrop-blur-none md:py-0 space-x-4 transition-all ease-in duration-400 ${
							isNavBarOpen ? "top-[95px]" : "top-[-400px]"
						} `}
					>
						{HeaderData.map((props) => (
							<NavLinks
								key={props.id}
								title={props.title}
								link={props.link}
								target={props.target}
								id={props.id}
							/>
						))}
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
