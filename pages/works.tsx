import WorksData from "@/core/data/WorksData";
import Header from "@/src/common/Header";
import MotionButton from "@/src/components/buttons/MotionButton";
import WorkCard from "@/src/components/work/WorkCard";
import { motion } from "framer-motion";
import Head from "next/head";

const works = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>Recent Works & Contributions</title>
				<meta name="title" content="Recent Works & Contributions" />
			</Head>
			<Header />
			<main className="py-8 flex flex-col justify-center items-center text-center">
				<motion.h2
					initial={{ opacity: 0, translateY: "30px" }}
					whileInView={{ opacity: 1, translateY: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="font-extrabold text-2xl py-5 text-black dark:text-white md:text-4xl heading"
				>
					Recents Works & Contributions
				</motion.h2>

				<section className="grid sm:grid-cols-2 gap-4 lg:gap-6 xl:gap-8  mx-4 sm:mx-12 lg:mx-20 xl:mx-32 2xl:mx-40 my-10">
					{WorksData.map((data, id) => (
						<WorkCard key={id} workData={data} />
					))}
				</section>
				<span
					className={`w-96 h-96 mt-[40rem] right-0 lg:block hidden pointer-events-none absolute -z-50`}
				>
					<img src={"/blobs/bloblight.svg"} alt="blob" />
				</span>
				<MotionButton
					href="https://github.com/milindgoel15?tab=repositories"
					target="_blank"
				>
					Other Contributions
				</MotionButton>
			</main>
		</>
	);
};

export default works;
