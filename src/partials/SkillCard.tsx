import React from "react";
import { motion } from "framer-motion";
import SKillDataInterface from "../interfaces/SkillDataInterface";

let SkillCard = (props: SKillDataInterface) => {
	return (
		<>
			<motion.div
				key={props.id}
				initial={{ opacity: 0, translateY: "10px" }}
				whileInView={{ opacity: 1, translateY: 0 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.3,
					delay: props.id * 0.05,
					ease: "easeIn",
				}}
				className="p-8 space-y-2 mt-4 sm:w-72 md:w-80 xl:w-88 2xl:w-96 sm:mt-0 text-clip text-left w-full rounded-md foldSkillCard"
			>
				<h2 className="text-2xl py-5 text-black dark:text-white font-semibold leading-6">
					{props.title}
				</h2>
				<p className="text-lg text-slate-800 dark:text-slate-200">
					{props.language}
				</p>
			</motion.div>
		</>
	);
};

export default SkillCard;
