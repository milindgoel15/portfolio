import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { WorksDataType } from "@/src/data/WorksData";

const WorkCard = ({ workData }: { workData: WorksDataType }) => {
	return (
		<>
			<motion.a
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
				className="py-10 sm:py-8 px-6 sm:px-10 md:px-8 min-h-full flex flex-col gap-4 bg-inverseSurface text-black dark:bg-altBackground dark:text-white hover:bg-blue-200 dark:hover:bg-blue-800 rounded-md shadow-md sm:mt-0 text-left transtion-all duration-300 ease-in-out top-0 relative hover:-top-1 hover:shadow-xl group foldWorkCard"
			>
				{workData.icon}
				<span className="flex justify-between items-center mt-5">
					<h2 className="text-2xl font-semibold leading-6">
						{workData.title}
					</h2>
					<ExternalLink
						className={`h-5 w-5 lg:invisible lg:group-hover:visible`}
					/>
				</span>
				<p className="text-lg">{workData.desc}</p>
				<p className="text-lg">{workData.role}</p>
				<p className="text-lg">{workData.lang}</p>
			</motion.a>
		</>
	);
};

export default WorkCard;
