import Hero from "@/lib/features/home/hero";
import SkillsSection from "@/lib/features/home/skills";
import Head from "next/head";

const Home = () => {
	return (
		<>
			<Head>
				<title>Milind Goel</title>
				<meta name="title" content="Milind Goel" />
			</Head>

			<Hero />
			<SkillsSection />
		</>
	);
};

export default Home;
