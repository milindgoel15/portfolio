import localFont from "next/font/local";
import type { AppProps } from "next/app";
import "../styles/globals.scss";
import { ThemeProvider } from "next-themes";
import React, { useState, useEffect } from "react";
import HeadDetails from "@/src/common/headDetails";
import Cloudflare from "@/src/common/Cloudflare";
import Cursor from "@/src/common/Cursor";
import Header from "@/src/common/Header";
import Footer from "@/src/common/Footer";
// import DesktopContext from "@/src/contexts/DesktopContext";
// import SnowFlakes from "@/src/common/SnowFlakes";

const raisonne = localFont({
	src: [
		{ path: "../public/fonts/raisonne.woff2" },
		{ path: "../public/fonts/raisonne.woff" },
	],
	display: "swap",
	weight: "400",
	style: "normal",
	variable: "--font-raisonne",
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	let [isDesktopMode, setDesktopMode] = useState(false);
	let desktop: boolean = typeof window == "object" && window.innerWidth > 1280;

	useEffect(() => {
		const updateComp = () => {
			setDesktopMode(desktop);
		};

		updateComp();
		window.addEventListener("resize", updateComp);
		return () => {
			window.removeEventListener("resize", updateComp);
		};
	}, []);

	useEffect(() => {
		console.log(
			"%cMade with ❤︎️ by Milind Goel",
			"background:#14161a;color:#fff;padding:0.5em 1em;line-height:1.8;"
		);
	}, []);

	return (
		<>
			<HeadDetails />
			<main className={`${raisonne.variable} font-raisonne`}>
				<Cloudflare />
				<ThemeProvider attribute="class">
					{/* <DesktopContext.Provider value={{ isDesktopMode }}>
						<SnowFlakes />
					</DesktopContext.Provider> */}
					{isDesktopMode && <Cursor />}
					<Header />
					<Component {...pageProps} />
					<Footer />
				</ThemeProvider>
			</main>
		</>
	);
}

export default MyApp;
