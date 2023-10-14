import React from "react";
import { motion } from "framer-motion";
import LinkButton from "../Icons/link";
import WorksDataInterface from "../interfaces/WorkDataInterface";

let WorkCard = ({ workData }: { workData: WorksDataInterface }) => {
	return (
		<>
			<motion.a
				key={workData.id}
				href={workData.link}
				target="_blank"
				rel="noreferrer"
				initial={{ opacity: 0, translateY: "10px" }}
				whileInView={{ opacity: 1, translateY: 0 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.3,
					delay: workData.id * 0.05,
					ease: "easeIn",
				}}
				className="py-10 sm:py-8 px-6 sm:px-10 md:px-8 mt-5 mx-4 sm:ml-0 min-h-fit flex flex-col gap-4 bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-800 border-transparent rounded-md shadow-md sm:w-80 md:w-96 sm:mt-0 lg:w-[30rem] 2xl:w-[34rem] text-left relative transtion-all duration-300 ease-in-out top-0 hover:-top-1 hover:shadow-xl group foldWorkCard"
			>
				<div className="flex justify-between items-center">
					<h2 className="text-2xl text-white font-semibold leading-6">
						{workData.title}
					</h2>
					<LinkButton styles={"lg:invisible lg:group-hover:visible"} />
				</div>
				<p className="text-lg text-slate-200">{workData.desc}</p>
				<p className="text-lg text-slate-200">{workData.role}</p>
				<p className="text-lg text-slate-200">{workData.lang}</p>
			</motion.a>
		</>
	);
};

export default WorkCard;
