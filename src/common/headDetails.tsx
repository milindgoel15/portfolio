import Head from "next/head";
import React from "react";

let headDetails = (): JSX.Element => {
   return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta
					name="keywords"
					content="Milind Goel, milindgoel15, Web Developer, Flutter Developer"
				/>
				<meta
					name="description"
					content="Experienced Web and Flutter Developer | Crafting Innovative Digital Solutions | Explore My Portfolio and Skills"
				/>

				{/* open graph / facebook meta tags */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://milindgoel.vercel.app/" />
				<meta property="og:title" content="Milind Goel" />
				<meta
					property="og:description"
					content="a Web and Flutter Developer | Crafting Innovative Digital Solutions | Explore My Portfolio and Skills"
				/>
				<meta
					property="og:image"
					content="https://github.com/milindgoel15/portfolio/blob/main/public/favicons/apple-touch-icon.png"
				/>

				{/* twitter meta tags */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content="https://milindgoel.vercel.app/"
				/>
				<meta property="twitter:title" content="Milind Goel" />
				<meta
					property="twitter:description"
					content="a Web and Flutter Developer | Crafting Innovative Digital Solutions | Explore My Portfolio and Skills"
				/>
				<meta
					property="twitter:image"
					content="https://github.com/milindgoel15/portfolio/blob/main/public/favicons/apple-touch-icon.png"
				/>

				{/* google site verification */}
				<meta
					name="google-site-verification"
					content="2tG9JnOT3BhG1wK6wvHuYbfJqzXu1D3aosqBoAMYHIA"
				/>

				{/* favicons */}
				<link
					rel="icon"
					type="image/png"
					sizes="512x512"
					href="/favicons/android-chrome-512x512.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/favicons/android-chrome-192x192.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicons/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicons/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicons/site.webmanifest" />
			</Head>
		</>
	);
}

export default headDetails;