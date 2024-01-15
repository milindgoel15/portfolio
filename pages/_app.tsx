import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { useEffect } from "react";
import "../styles/globals.scss";

import BlobAnimation from "@/src/blobanimation/BlobAnimation";
import Cloudflare from "@/src/common/Cloudflare";
import Cursor from "@/src/common/Cursor";
import Footer from "@/src/common/Footer";
import HeadDetails from "@/src/common/headDetails";
import MotionTransition from "@/src/components/MotionTransition";
import DesktopModeProvider from "@/src/hooks/useDesktopMode";
import SnowModeProvider from "@/src/hooks/useSnowMode";
import MotionProvider from "@/src/providers/MotionProvider";
import { NextThemeProvider } from "@/src/providers/NextThemeProvider";
import { Toaster } from "react-hot-toast";

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
			<MotionProvider>
				<MotionTransition />
				<DesktopModeProvider>
					<SnowModeProvider>
						<NextThemeProvider>
							<Cursor />

							<BlobAnimation />
							<Component {...pageProps} />

							<Footer />
							<Toaster />
						</NextThemeProvider>
					</SnowModeProvider>
				</DesktopModeProvider>
			</MotionProvider>
		</>
	);
}

export default MyApp;
