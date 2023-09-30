import Head from "next/head";
import { motion } from "framer-motion";
import WorksData from "@/src/data/WorksData";
import WorkCard from "@/src/partials/WorkCard";
import Button from "@/src/common/Button";

let works = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>Recent Works & Contributions</title>
				<meta name="title" content="Recent Works & Contributions" />
			</Head>

			<main className="pt-20 text-center">
				<motion.h2
					initial={{ opacity: 0, translateY: "30px" }}
					whileInView={{ opacity: 1, translateY: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="font-extrabold text-2xl py-5 xl:mx-80 2xl:mx-110 text-black dark:text-white md:text-4xl heading"
				>
					Recents Works & Contributions
				</motion.h2>

				<section className="flex justify-center items-center">
					<div className="grid relative grid-rows-6 gap-2 sm:mt-12 sm:grid-cols-2 sm:grid-rows-3 sm:gap-4 lg:gap-6 lg:grid-col-2 xl:gap-8 ">
						{WorksData.map((props) => (
							<WorkCard
								key={props.id}
								title={props.title}
								desc={props.desc}
								role={props.role}
								lang={props.lang}
								link={props.link}
								id={props.id}
							/>
						))}
					</div>
				</section>
				<div
					className={`w-96 h-96 -mt-20 right-0 lg:block hidden pointer-events-none absolute -z-50`}
				>
					<img src={"/blobs/bloblight.svg"} alt="blob" />
				</div>
				<Button
					link="https://github.com/milindgoel15?tab=repositories"
					targetValue="_blank"
					title="Other Contributions"
				/>
			</main>
		</>
	);
};

export default works;
