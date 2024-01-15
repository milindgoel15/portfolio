import { SVGProps } from "react";

const MotionChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="lucide lucide-chevrons-down"
		{...props}
	>
		<path className="animate-bounce" d="m7 6 5 5 5-5M7 13l5 5 5-5" />
	</svg>
);

export default MotionChevronDownIcon;
