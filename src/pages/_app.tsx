import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { useEffect } from "react";
import "./globals.scss";

import BlobAnimation from "@/lib/blobanimation/BlobAnimation";
import Cloudflare from "@/lib/common/Cloudflare";
import Cursor from "@/lib/common/Cursor";
import Footer from "@/lib/common/Footer";
import HeadDetails from "@/lib/common/headDetails";
import LenisLayout from "@/lib/common/LenisLayout";
import MotionTransition from "@/lib/components/MotionTransition";
import DesktopModeProvider from "@/lib/hooks/useDesktopMode";
import SnowModeProvider from "@/lib/hooks/useSnowMode";
import MotionProvider from "@/lib/providers/MotionProvider";
import NextThemeProvider from "@/lib/providers/NextThemeProvider";
import { Toaster } from "react-hot-toast";

const raisonne = localFont({
	src: [
		{ path: "../../public/fonts/raisonne.woff2" },
		{ path: "../../public/fonts/raisonne.woff" },
	],
	display: "swap",
	weight: "400",
	style: "normal",
	variable: "--font-raisonne",
	fallback: ["system-ui", "sans-serif"],
});

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		console.log(
			"%cMade with ❤︎️ by Milind Goel",
			"background:#14161a;color:#fff;padding:0.5em 1em;line-height:1.8;",
		);
	}, []);

	return (
		<>
			<HeadDetails />
			<style jsx global>{`
				html {
					font-family: ${raisonne.style.fontFamily};
					// text selection none
					-webkit-user-select: none;
					-moz-user-select: none;
					-ms-user-select: none;
					user-select: none;
				}
			`}</style>
			<Cloudflare />
			<LenisLayout>
				<MotionProvider>
					<NextThemeProvider>
						<MotionTransition />
						<DesktopModeProvider>
							<SnowModeProvider>
								<Cursor />

								<BlobAnimation />
								<Component {...pageProps} />

								<Footer />
								<Toaster />
							</SnowModeProvider>
						</DesktopModeProvider>
					</NextThemeProvider>
				</MotionProvider>
			</LenisLayout>
		</>
	);
}

export default MyApp;
