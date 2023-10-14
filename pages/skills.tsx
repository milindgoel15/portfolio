import Head from "next/head";
import { motion } from "framer-motion";
import { InferGetStaticPropsType } from "next";

import SkillCard from "@/src/partials/SkillCard";
import SKillDataInterface from "@/src/interfaces/SkillDataInterface";
import SkillDataInterface from "@/src/interfaces/SkillDataInterface";

let skills = ({
	skillsData,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
	return (
		<>
			<Head>
				<title>Skills</title>
				<meta name="title" content="Skills" />
			</Head>
			<main className="pt-20 text-center">
				<motion.h2
					initial={{ opacity: 0, translateY: "30px" }}
					whileInView={{ opacity: 1, translateY: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="font-extrabold text-4xl py-1 xl:mx-110 2xl:mx-128 text-black dark:text-white heading"
				>
					Skills
				</motion.h2>

				<section className="flex mt-12 sm:mt-0 justify-center">
					<div className=" grid relative grid-rows-8 gap-2 sm:grid-cols-2 sm:grid-rows-5 sm:mx-14 sm:mt-12 lg:grid-col-3 lg:grid-rows-3 lg:grid-flow-col lg:gap-5 ">
						{skillsData.map((skill: SKillDataInterface) => (
							<SkillCard
								key={skill.id}
								title={skill.title}
								language={skill.language}
								id={skill.id}
							/>
						))}
					</div>
				</section>
			</main>
		</>
	);
};

export default skills;

export const getStaticProps = async () => {
	const res = await fetch(
		"https://github.com/milindgoel15/portfolio-data/blob/main/skills_data.json?raw=true"
	);
	const data = await res.json();

	return {
		props: { skillsData: data["skillsData"] as SkillDataInterface[] },
		revalidate: 60,
	};
};
