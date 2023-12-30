import { motion } from "framer-motion";
import Link from "next/link";
import ButtonProps from "../interfaces/ButtonInterface";

let MotionButton = (props: ButtonProps): JSX.Element => {
	return (
		<>
			<motion.span
				initial={{ opacity: 0, translateY: "16px" }}
				whileInView={{ opacity: 1, translateY: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="my-10"
			>
				<Link
					href={props.link}
					target={props.targetValue}
					rel="noopener noreferrer"
					className="py-6 px-16 rounded-full transition-all bg-blue-600 text-white hover:bg-blue-800 hover:outline-2 outline hover:outline-black dark:outline-none dark:bg-white dark:text-blue-600 dark:hover:text-white dark:hover:bg-blue-700 foldButton"
					aria-label="button"
				>
					{props.title}
				</Link>
			</motion.span>
		</>
	);
};

export default MotionButton;
