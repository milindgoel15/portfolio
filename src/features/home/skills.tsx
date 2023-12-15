import SkillsData from "@/src/data/SkillsData";
import { motion } from "framer-motion";
import React from "react";

const SkillsSection = () => {
	return (
		<>
			<section className="flex flex-col items-center justify-center">
				<h3 className="text-4xl font-medium py-8">Skills</h3>
				<section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-8">
					{SkillsData.map((skills, id) => (
						<>
							<motion.div
								key={id}
								initial={{ opacity: 0, translateY: "10px" }}
								whileInView={{ opacity: 1, translateY: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.3,
									delay: id * 0.05,
									ease: "easeIn",
								}}
								className=" bg-inverseSurface text-black dark:bg-altBackground dark:text-white backdrop-blur-lg px-8 py-10 flex flex-col justify-between gap-10 rounded"
							>
								{skills.icon}
								<span className="flex flex-col gap-2 max-w-[90%]">
									<p className="text-3xl">{skills.title}</p>
									<p className="">{skills.language}</p>
								</span>
							</motion.div>
						</>
					))}
					<span
						className={`w-96 h-96 -mt-4 right-0 lg:block hidden pointer-events-none absolute -z-50`}
					>
						<img src={"/blobs/bloblight.svg"} alt="blob" />
					</span>
				</section>
			</section>
		</>
	);
};

export default SkillsSection;
