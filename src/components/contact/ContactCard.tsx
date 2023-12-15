import React from "react";
import { motion } from "framer-motion";
import ContactDataInterface from "../../interfaces/ContactDataInterface";

const ContactCard = (props: ContactDataInterface) => {
	return (
		<>
			<motion.a
				key={props.id}
				href={props.link}
				target="_blank"
				rel="noopener noreferrer"
				initial={{ opacity: 0, translateY: "8px" }}
				whileInView={{ opacity: 1, translateY: 0 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.25,
					delay: props.id * 0.05,
					ease: "easeIn",
				}}
				className="p-8 flex items-center bg-inverseSurface text-black dark:bg-altBackground dark:text-white hover:bg-blue-200 dark:hover:bg-blue-800 rounded-md shadow-md space-y-2 mt-5 sm:ml-0 sm:mt-0 text-left relative transtion-all duration-300 ease-in-out top-0 hover:-top-1 hover:shadow-xl foldContactCard"
			>
				<div className="lg:pl-2.5 pt-1.5 foldContactIcon">
					{props.image}
				</div>

				<div className="flex flex-col px-5 lg:px-9">
					<h2 className="text-2xl py-1 font-semibold leading-6">
						{props.social}
					</h2>
					<p className="text-lg">{props.username}</p>
				</div>
			</motion.a>
		</>
	);
};

export default ContactCard;
