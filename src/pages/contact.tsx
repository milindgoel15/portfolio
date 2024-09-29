import Header from "@/lib/common/Header";
import ContactForm from "@/lib/features/contact/ContactForm";
import ContactHero from "@/lib/features/contact/ContactHero";
import Head from "next/head";

const Contact = () => {
	return (
		<>
			<Head>
				<title>Connect with me</title>
				<meta name="title" content="Connect with me" />
			</Head>
			<main>
				<Header />
				<section className="sm:grid sm:gap-4 sm:grid-cols-2 justify-center items-center md:gap-8 mx-4 sm:mx-8 xl:mx-16 2xl:mx-36">
					<ContactHero />
					<ContactForm />
				</section>
			</main>
		</>
	);
};

export default Contact;
