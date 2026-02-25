"use client";

import { ProjectType } from "@/core/data/ProjectType";
import { AppMotionDiv } from "@/lib/components/motion/AppMotion";
import Image from "next/image";
import Link from "next/link";

const WorkCard = ({ data, id }: { data: ProjectType; id: number }) => {
	return (
		<>
			<AppMotionDiv
				initial={{ opacity: 0, translateY: "10px" }}
				whileInView={{ opacity: 1, translateY: 0 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.3,
					delay: id * 0.1,
				}}
				className="grid md:grid-cols-2 gap-8"
			>
				<Image
					alt={data.title}
					src={data.coverImage.light}
					className={`rounded-3xl w-full h-full block dark:hidden shadow-md object-cover ${
						id % 2 == 0 && "md:order-2"
					}`}
					height={400}
					width={600}
				/>
				<Image
					alt={data.title}
					src={data.coverImage.dark}
					className={`rounded-3xl w-full dark:block hidden h-full shadow-md object-cover ${
						id % 2 == 0 && "md:order-2"
					}`}
					height={400}
					width={600}
				/>
				<div
					className={` ${
						id % 2 == 0 ? "md:order-1 md:text-right text-left md:items-end" : "text-left"
					} flex flex-col gap-4 justify-center`}
				>
					<h2 className="text-3xl sm:text-2xl lg:text-3xl  font-semibold leading-6">
						{data.title}
					</h2>
					{/* <span className="flex justify-between items-center mt-5">
									<ExternalLink
										className={`h-5 w-5 lg:invisible lg:group-hover:visible`}
									/>
								</span> */}
					<p className="sm:text-lg lg:text-lg w-3/4">{data.overview}</p>
					<span className="space-y-2">
						<p className="text-base">{data.role}</p>
						<p className="text-base">{data.duration}</p>
					</span>
					<Link
						href={`/works/${data.slug}`}
						// target="_blank"
						className="px-7 py-3 flex items-center gap-2 border-2 border-current w-fit transition-all hover:border-primary linkBtn shadow"
					>
						View case study →
					</Link>
				</div>
			</AppMotionDiv>
		</>
	);
};

export default WorkCard;
