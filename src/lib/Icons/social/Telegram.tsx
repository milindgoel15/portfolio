import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
	className: string;
};

const Telegram = ({ className, ...props }: IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className={className}
		fill="#fff"
		viewBox="0 0 168.3 147.57"
		{...props}
	>
		<g data-name="Layer 2">
			<path
				d="M163.39 3.25A13.85 13.85 0 0 0 149.29 1L7 58a11.36 11.36 0 0 0 0 21l9.19 3.79A6.19 6.19 0 1 0 21 71.32l-6.83-2.79L154 12.62a1.35 1.35 0 0 1 1.42 0 1.47 1.47 0 0 1 .5 1.43l-25.57 119.12a2.49 2.49 0 0 1-1.62 1.86 2.44 2.44 0 0 1-2.42-.37L76.63 95.9l48.62-49.12a6.21 6.21 0 0 0-7.57-9.69l-71.3 42.23a6.21 6.21 0 1 0 5.12 11.32 6 6 0 0 0 1.09-.64l30-17.7L68 87.15a12.41 12.41 0 0 0-.54 17.55 12.27 12.27 0 0 0 1.79 1.58l49.68 38.19a14.86 14.86 0 0 0 9.13 3.1 15.08 15.08 0 0 0 5.15-.93 14.71 14.71 0 0 0 9.44-10.87L168 16.78a13.83 13.83 0 0 0-4.61-13.53Z"
				data-name="Layer 1"
			/>
		</g>
	</svg>
);

export default Telegram;
