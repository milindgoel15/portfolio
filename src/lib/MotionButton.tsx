import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ButtonProps from "../interfaces/ButtonInterface";

let MotionButton = (props: ButtonProps): JSX.Element => {
	let hidden = {
		opacity: 0,
		translateY: "16px",
	};
	let show = {
		opacity: 1,
		translateY: 0,
		transition: {
			duration: 0.35,
			ease: "easeIn",
		},
	};

	return (
		<>
			<Link
				href={props.link}
				target={props.targetValue}
				rel="noopener noreferrer"
			>
				<motion.button
					initial={hidden}
					whileInView={show}
					viewport={{ once: true }}
					className="my-10 py-6 px-20 rounded-full transition-all bg-blue-600 text-white hover:bg-blue-800 hover:outline-2 outline hover:outline-black dark:outline-none dark:bg-white dark:text-blue-600 dark:hover:text-white dark:hover:bg-blue-700 foldButton"
					aria-label="button"
				>
					{props.title}
				</motion.button>
			</Link>
		</>
	);
};

export default MotionButton;
