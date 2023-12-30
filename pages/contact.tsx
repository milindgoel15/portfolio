import ContactCard from "@/src/components/contact/ContactCard";
import ContactData from "@/src/data/ContactData";
import { motion } from "framer-motion";
import Head from "next/head";

const contact = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>Connect with me</title>
				<meta name="title" content="Connect with me" />
			</Head>
			<main className="py-10 flex flex-col justify-center items-center text-center ">
				<motion.h2
					initial={{ opacity: 0, translateY: "30px" }}
					whileInView={{ opacity: 1, translateY: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="font-extrabold text-4xl py-8 text-black dark:text-white heading"
				>
					Connect with me
				</motion.h2>

				{/* <section className="flex justify-center items-center"> */}
				<section className="grid relative gap-4 sm:grid-cols-2 sm:gap-8 my-10">
					{ContactData.map((props) => (
						<ContactCard
							key={props.id}
							image={props.image}
							link={props.link}
							social={props.social}
							username={props.username}
							id={props.id}
						/>
					))}
				</section>
				{/* </section> */}
			</main>
		</>
	);
};

export default contact;
