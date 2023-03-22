import Head from "next/head";
import { motion } from "framer-motion";
import Button from "@/src/common/Button";

export default function Home() {
	return (
		<>
			<Head>
				<title>Milind Goel</title>
				<meta name="title" content="Milind Goel" />
				<meta
					name="description"
					content="A Web Developer, based in India building astonishing web experiences."
				/>
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
				<div className="hidden md:block w-96 h-96 md:ml-128 lg:ml-162 xl:ml-180 pointer-events-none absolute border-2 border-gray-600 rounded-full"></div>
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
}
