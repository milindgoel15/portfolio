import Head from "next/head";
import Hero from "@/src/features/home/hero";
import SkillsSection from "@/src/features/home/skills";

const Home = (): JSX.Element => {
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
