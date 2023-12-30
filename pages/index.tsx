import Hero from "@/src/features/home/hero";
import SkillsSection from "@/src/features/home/skills";
import Head from "next/head";

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
