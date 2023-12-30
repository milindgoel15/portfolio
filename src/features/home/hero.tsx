import Waves from "@/src/Icons/hero/Waves";
import MotionButton from "@/src/lib/MotionButton";
// import MotionButton from "@/src/lib/MotionButton";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<>
			<main className="bg-inverseHighlight dark:bg-highlight px-4 md:px-8 xl:px-32 2xl:px-56 lg:py-12 gap-5 py-10 flex flex-col justify-center text-center items-center dark:text-white">
				<motion.h2
					initial={{ opacity: 0, translateY: "24" }}
					whileInView={{ opacity: 1, translateY: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-3xl md:text-5xl lg:text-6xl font-extrabold"
				>
					Where Innovation Meets Pixels: Shaping Ideas into Dynamic Digital
					Realities
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, translateY: "30px" }}
					whileInView={{ opacity: 1, translateY: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="font-light foldIndexTitle w-11/12 tracking-wider"
				>
					Hi! I&apos;m Milind Goel, a Web & Flutter developer, based in
					India. My primary focus is on crafting seamless and visually
					engaging user experiences. If you're seeking someone who can
					bring your digital ideas to life, count me in! I'm here and ready
					to make it happen.
				</motion.p>

				<MotionButton
					link="/contact"
					title="LET'S CONNECT"
					targetValue="_self"
				/>
			</main>
			<Waves />
		</>
	);
};

export default Hero;