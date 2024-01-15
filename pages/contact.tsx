import Header from "@/src/common/Header";
import ContactForm from "@/src/features/contact/ContactForm";
import ContactHero from "@/src/features/contact/ContactHero";
import Head from "next/head";

const contact = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>Connect with me</title>
				<meta name="title" content="Connect with me" />
			</Head>
			<main>
				<Header />
				<section className="grid gap-4 md:grid-cols-2 justify-center items-center sm:gap-8  mx-4 sm:mx-8 xl:mx-16 2xl:mx-36">
					<ContactHero />
					<ContactForm />

				</section>
			</main>
		</>
	);
};

export default contact;
