import Head from "next/head";
import { motion } from "framer-motion";
import Button from "@/src/common/Button";

let Home = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>Milind Goel</title>
				<meta name="title" content="Milind Goel" />
			</Head>

			<main className="pt-28 relative pb-20 text-center">
				<motion.h2
					initial={{ opacity: 0, translateY: "30px" }}
					whileInView={{ opacity: 1, translateY: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="font-extrabold text-5xl py-5 xl:mx-40 2xl:mx-80 lg:text-8xl text-black dark:text-white md:text-6xl heading foldIndexTitle"
				>
					Hi! I&apos;m Milind Goel
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, translateY: "50px" }}
					whileInView={{ opacity: 1, translateY: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-xl text-black dark:text-white py-8 px-3 xl:mx-80 2xl:mx-110 md:text-2xl heading"
				>
					a Web & Flutter developer, based in India
				</motion.p>
				<Button
					link="/contact"
					title="CONNECT WITH ME"
					targetValue="_self"
				/>
			</main>
		</>
	);
};

export default Home;
