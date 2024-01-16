import MotionChevronDownIcon from "@/lib/Icons/hero/MotionChevronDownIcon";
import Waves from "@/lib/Icons/hero/Waves";
import Header from "@/lib/common/Header";
import MotionButton from "@/lib/components/buttons/MotionButton";
import { AppMotionH2, AppMotionP } from "@/lib/components/motion/AppMotion";

const Hero = () => {
	return (
		<>
			<main className="bg-inverseHighlight dark:bg-highlight">
				<Header />
				<section className="px-4 md:px-8 xl:px-32 2xl:px-52 py-8 gap-5 flex flex-col justify-center text-center items-center dark:text-white">
					<AppMotionH2
						initial={{ opacity: 0, translateY: "24" }}
						whileInView={{ opacity: 1, translateY: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-3xl md:text-5xl lg:text-6xl font-extrabold"
					>
						Where Innovation Meets Pixels: Shaping Ideas into Dynamic Digital
						Realities
					</AppMotionH2>
					<AppMotionP
						initial={{ opacity: 0, translateY: "30px" }}
						whileInView={{ opacity: 1, translateY: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="font-light fold:text-lg lg:w-11/12 lg:tracking-wider"
					>
						Hi! I&apos;m Milind Goel, a Web & Flutter developer, based in
						India. My primary focus is on crafting seamless and visually
						engaging user experiences. If you&apos;re seeking someone who can
						bring your digital ideas to life, count me in! I&apos;m here and ready
						to make it happen.
					</AppMotionP>

					<MotionButton href="/contact" target="_self">
						LET&apos;S CONNECT
					</MotionButton>

					<MotionChevronDownIcon />
				</section>
			</main>
			<Waves />
		</>
	);
};

export default Hero;
