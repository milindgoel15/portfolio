import Head from "next/head";
import { motion } from "framer-motion";
import SkillCard from "@/src/partials/SkillCard";
import SkillsData from "@/src/data/SkillsData";

let skills = (): JSX.Element => {
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

				<section className="flex justify-center">
					<div className="grid relative grid-rows-8 gap-2 sm:grid-cols-2 sm:grid-rows-5 sm:mx-14 sm:mt-12 lg:grid-col-3 lg:grid-rows-3 lg:grid-flow-col lg:gap-5">
						{SkillsData.map((props) => (
							<SkillCard
								key={props.id}
								title={props.title}
								language={props.language}
								id={props.id}
							/>
						))}
					</div>
				</section>
			</main>
		</>
	);
};

export default skills;
