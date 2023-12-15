import localFont from "next/font/local";
import type { AppProps } from "next/app";
import "../styles/globals.scss";
import React, { useEffect } from "react";

import HeadDetails from "@/src/common/headDetails";
import Cloudflare from "@/src/common/Cloudflare";
import Cursor from "@/src/common/Cursor";
import Header from "@/src/common/Header";
import Footer from "@/src/common/Footer";
import BlobAnimation from "@/src/blobanimation/BlobAnimation";
import DesktopModeProvider from "@/src/hooks/useDesktopMode";
import { NextThemeProvider } from "@/src/providers/NextThemeProvider";
import SnowModeProvider from "@/src/hooks/useSnowMode";

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
	useEffect(() => {
		console.log(
			"%cMade with ❤︎️ by Milind Goel",
			"background:#14161a;color:#fff;padding:0.5em 1em;line-height:1.8;"
		);
	}, []);

	return (
		<>
			<HeadDetails />
			<style jsx global>{`
				html {
					font-family: ${raisonne.style.fontFamily};
				}
			`}</style>
			<Cloudflare />
			<DesktopModeProvider>
				<SnowModeProvider>
					<NextThemeProvider>
						<Cursor />
						<Header />
						<BlobAnimation />
						<Component {...pageProps} />
						<Footer />
					</NextThemeProvider>
				</SnowModeProvider>
			</DesktopModeProvider>
		</>
	);
}

export default MyApp;
