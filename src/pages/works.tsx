import WorksData from "@/core/data/WorksData";
import { BlobImage } from "@/lib/blobanimation/BlobAnimation";
import Header from "@/lib/common/Header";
import MotionButton from "@/lib/components/buttons/MotionButton";
import { AppMotionH2 } from "@/lib/components/motion/AppMotion";
import WorkCard from "@/lib/components/work/WorkCard";
import Head from "next/head";

const Works = () => {
	return (
		<>
			<Head>
				<title>Recent Works & Contributions</title>
				<meta name="title" content="Recent Works & Contributions" />
			</Head>
			<Header />
			<main className="py-8 flex flex-col justify-center items-center text-center">
				<AppMotionH2
					initial={{ opacity: 0, translateY: "30px" }}
					whileInView={{ opacity: 1, translateY: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="font-extrabold text-2xl py-5 text-black dark:text-white md:text-4xl heading"
				>
					Recents Works & Contributions
				</AppMotionH2>

				<section className="mx-4 sm:mx-10 lg:mx-20 space-y-16 my-12">
					{WorksData.map((data, id) => (
						<WorkCard key={id} id={id} data={data} />
					))}
				</section>

				<span
					className={`w-96 h-96 mt-[40rem] right-0 lg:block hidden pointer-events-none absolute -z-50`}
				>
					<BlobImage />
				</span>
				<MotionButton href="https://github.com/milindgoel15?tab=repositories" target="_blank">
					Other Contributions
				</MotionButton>
			</main>
		</>
	);
};

export default Works;
