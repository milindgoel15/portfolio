import ContactData from "@/core/data/ContactData";
import { motion } from "framer-motion";
import Link from "next/link";

const ContactHero = () => {
	return (
		<>
			<section className="flex flex-col gap-8 items-start text-left">
				<motion.h3
					initial={{ opacity: 0, translateY: "20px" }}
					whileInView={{ opacity: 1, translateY: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-4xl font-bold"
				>
					It's time to build something exciting!
				</motion.h3>
				<motion.p
					initial={{ opacity: 0, translateY: "15px" }}
					whileInView={{ opacity: 1, translateY: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-lg font-light lg:w-11/12"
				>
					Thanks for stopping by! If you have any questions, suggestions,
					or just want to chat, feel free to reach out using the details
					below or use the quick contact form for a direct message.
				</motion.p>
				<ul className=" grid lg:grid-cols-2 gap-6">
					{ContactData.map((props, id) => (
						<motion.li
							initial={{ opacity: 0, translateY: "10px" }}
							whileInView={{ opacity: 1, translateY: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: id * 0.1 }}
							className="flex gap-2"
							key={id}
						>
							{props.image}{" "}
							<Link href={props.link}> {props.username} </Link>
						</motion.li>
					))}
				</ul>
			</section>
		</>
	);
};

export default ContactHero;
