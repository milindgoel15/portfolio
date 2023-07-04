import * as React from "react";
import { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 108 125"
		{...props}
	>
		<path
			fill="#1649FF"
			fillRule="evenodd"
			d="M.266 72.97v20.193L54 124.186l53.734-31.023V72.97l-13.662 7.888v4.419L53.999 108.41 13.927 85.276v-4.42L.267 72.97Z"
			clipRule="evenodd"
		/>
		<path
			fill="#1649FF"
			fillRule="evenodd"
			d="M.266 52.445v14.447L54 97.915l53.734-31.023V52.446L54 83.469.266 52.445Z"
			clipRule="evenodd"
		/>
		<path
			className="fill-black dark:fill-white"
			fillRule="evenodd"
			d="M.266 31.12v15.26L54 77.402l29.07-16.784-13.21-7.627v-.006L54 62.143.266 31.12Zm96.416 6.38.005.004v15.253l11.047-6.378V31.12L96.682 37.5Z"
			clipRule="evenodd"
		/>
		<path
			className="fill-black dark:fill-white"
			fillRule="evenodd"
			d="M.266 45.563V31.117L54 .095l53.734 31.023v14.446L54 14.54.266 45.563Z"
			clipRule="evenodd"
		/>
	</svg>
);

export default Logo;
