import { motion } from "framer-motion";

const SystemIcon = ({ rotate }: any) => {
	const rotateAnim = {
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
			className="h-6 w-6 transition-all duration-200 fill-black dark:fill-white group-hover:fill-blue-500 stroke-black dark:stroke-white group-hover:stroke-blue-500"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			stroke="currentColor"
			strokeWidth={1.5}
			viewBox="0 0 24 24"
			variants={rotateAnim}
			animate={rotate ? rotateAnim.show : rotateAnim.hidden}
			viewport={{ once: true }}
			transition={{ duration: 0.2 }}
			aria-label="System mode icon"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
			/>
		</motion.svg>
	);
};
export default SystemIcon;
