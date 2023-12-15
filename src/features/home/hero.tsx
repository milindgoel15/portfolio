import Waves from "@/src/Icons/hero/Waves";
// import MotionButton from "@/src/lib/MotionButton";
import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
	return (
		<>
			<main className="bg-inverseHighlight dark:bg-highlight px-4 fold:px-8 xl:px-32 py-10 flex flex-col dark:text-white">
				<span className="py-5">
					<motion.h1
						initial={{ opacity: 0, translateY: "30px" }}
						whileInView={{ opacity: 1, translateY: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="font-semibold text-4xl foldIndexTitle"
					>
						Hi! I&apos;m Milind Goel
					</motion.h1>
					<motion.h3
						initial={{ opacity: 0, translateY: "50px" }}
						whileInView={{ opacity: 1, translateY: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-black dark:text-white py-1"
					>
						a Web & Flutter developer, based in India
					</motion.h3>
				</span>
				<motion.h5
					initial={{ opacity: 0, translateY: "50px" }}
					whileInView={{ opacity: 1, translateY: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-6xl lg:text-heading font-extrabold"
				>
					{/* Where Innovation Meets Pixels: Shaping Ideas into Dynamic
						Digital Realities */}
					Invent&#128293;, Innovate&#128293;, Interact&#128293;: Your
					Ideas, Our Digital Magic!
				</motion.h5>
				{/* <MotionButton
					link="/contact"
					title="LET'S CONNECT"
					targetValue="_self"
				/> */}
			</main>
			<Waves />
		</>
	);
};

export default Hero;
