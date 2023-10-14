import React from "react";
import { motion } from "framer-motion";
import SkillDataInterface from "../interfaces/SkillDataInterface";

let SkillCard = (skill: SkillDataInterface) => {
	return (
		<>
			<motion.div
				key={skill.id}
				initial={{ opacity: 0, translateY: "10px" }}
				whileInView={{ opacity: 1, translateY: 0 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.3,
					delay: skill.id * 0.05,
					ease: "easeIn",
				}}
				className="py-5 px-4 mx-4 sm:mx-0 space-y-2 sm:w-72 md:w-80 lg:w-88 xl:w-92 text-clip text-left w-full rounded-md foldSkillCard"
			>
				<h2 className="text-2xl py-3 text-black dark:text-white font-semibold leading-6">
					{skill.title}
				</h2>
				<p className="text-lg py-1 text-slate-800 dark:text-slate-200">
					{skill.language}
				</p>
			</motion.div>
		</>
	);
};

export default SkillCard;
