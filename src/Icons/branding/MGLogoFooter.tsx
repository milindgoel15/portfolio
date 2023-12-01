import * as React from "react";
import { SVGProps } from "react";

const MGLogoFooter = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 56 16"
		{...props}
	>
		<path
			className="dark:fill-white fill-black"
			d="M30.2 7.748v1.959h4.695c-.145 1.499-.67 1.499-1.17 1.499h-4.287c-.605 0-.986-.092-1.13-.263-.171-.21-.264-.71-.264-1.512V7.13c0-.802.093-1.302.263-1.512.145-.171.526-.263 1.131-.263h3.63c.63 0 1.13.144 1.432.407.29.25.434.658.434 1.21h1.96c0-1.42-.605-2.248-1.118-2.682a3.289 3.289 0 0 0-1.25-.684 5.079 5.079 0 0 0-1.459-.21h-3.629c-.789 0-1.92.105-2.643.973-.618.762-.697 1.814-.697 2.76v2.302c0 .946.08 1.998.697 2.76.723.869 1.854.974 2.643.974h4.287c1.577 0 2.327-.855 2.682-1.565.42-.868.486-1.946.486-2.88v-.972h-6.692Zm-7.144-4.063h1.998v9.19h-1.959V7.012l-3.445 5.865h-1.998L14.194 7.01v5.865h-1.946V3.684h1.998l4.405 7.494 4.405-7.494Z"
		/>
		<path
			className="fill-blue-700 dark:fill-blue-400 transition-all hover:fill-blue-500"
			d="M11.364 4.382 8.905 8.287l2.459 3.892H9.589L7.13 8.287l2.46-3.905h1.775Z"
		/>
		<path
			className="dark:fill-white fill-black"
			d="M41.164 3.685h1.946l-3.616 9.19h-1.946l3.616-9.19Z"
		/>
		<path
			className="fill-blue-700 dark:fill-blue-400 transition-all hover:fill-blue-500"
			d="m47.807 8.287-2.46-3.905h-1.774l2.459 3.905-2.46 3.892h1.776l2.459-3.892Z"
		/>
		<path
			className="dark:fill-white fill-black"
			fillRule="evenodd"
			d="M.08 8.214A7.69 7.69 0 0 1 7.77.524h39.893a7.69 7.69 0 1 1 0 15.38H7.77a7.69 7.69 0 0 1-7.69-7.69Zm1.37 0a6.32 6.32 0 0 1 6.32-6.32h39.893a6.32 6.32 0 1 1 0 12.64H7.77a6.32 6.32 0 0 1-6.32-6.32Z"
			clipRule="evenodd"
		/>
	</svg>
);
export default MGLogoFooter;
