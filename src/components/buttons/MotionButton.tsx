import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";

export type ButtonProps = LinkProps & {
	target: HTMLAttributeAnchorTarget;
	children: ReactNode;
};

let MotionButton = ({
	target,
	children,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, translateY: "16px" }}
				whileInView={{ opacity: 1, translateY: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="my-10"
			>
				<Link
					rel="noopener noreferrer"
					target={target}
					className="py-6 px-16 rounded-full transition-all bg-blue-600 text-white hover:bg-blue-800 hover:outline-2 outline hover:outline-black outline-none dark:outline-none dark:bg-white dark:text-blue-600 dark:hover:text-white dark:hover:bg-blue-700 foldButton"
					aria-label="button"
					{...props}
				>
					{children}
				</Link>
			</motion.div>
		</>
	);
};

export default MotionButton;
