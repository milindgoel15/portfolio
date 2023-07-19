import React from "react";
import { motion } from "framer-motion";
import LinkButton from "../Icons/link";
import WorksDataInterface from "../interfaces/WorkDataInterface";

let WorkCard = (props: WorksDataInterface) => {
	return (
		<>
			<motion.a
				key={props.id}
				href={props.link}
				target="_blank"
				rel="noreferrer"
				initial={{ opacity: 0, translateY: "10px" }}
				whileInView={{ opacity: 1, translateY: 0 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.3,
					delay: props.id * 0.05,
					ease: "easeIn",
				}}
				className="py-4 sm:py-8 px-6 sm:h-80 sm:px-10 md:px-8 min-h-fit bg-blue-600 hover:bg-blue-700 border-transparent rounded-md shadow-md space-y-2 mt-5 mx-4 sm:ml-0 sm:w-80 md:w-96 sm:mt-0 md:h-72 lg:h-72 lg:w-[30rem] text-left relative transtion-all duration-300 ease-in-out top-0 hover:-top-1 hover:shadow-xl group foldWorkCard"
			>
				<div className="flex justify-between items-center">
					<h2 className="text-2xl py-5 text-white font-semibold leading-6">
						{props.title}
					</h2>
					<div className="lg:invisible lg:group-hover:visible ">
						<LinkButton />
					</div>
				</div>
				<p className="text-lg text-slate-200">{props.desc}</p>
				<p className="text-lg text-slate-200">{props.role}</p>
				<p className="text-lg text-slate-200 py-1 lg:py-2 w-11/12">
					{props.lang}
				</p>
			</motion.a>
		</>
	);
};

export default WorkCard;
