import * as React from "react";
import { motion } from "framer-motion";

let Moon = ({ rotate }: any) => {
	let rotateAnim = {
		hidden: {
			opacity: 1,
			rotate: 360,
		},
		show: {
			opacity: 1,
			rotate: 180,
		},
	};

	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6 transition-all duration-200 fill-white group-hover:fill-blue-600 stroke-white group-hover:stroke-blue-600"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
			variants={rotateAnim}
			animate={rotate ? rotateAnim.show : rotateAnim.hidden}
			viewport={{ once: true }}
			transition={{ duration: 0.2, ease: "easeIn" }}
			aria-label="Dark mode icon"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z"
			/>
		</motion.svg>
	);
};

export default Moon;
