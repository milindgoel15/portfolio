"use client";

import { WorksDataType } from "@/core/data/WorksData";
import { AppMotionDiv } from "@/lib/components/motion/AppMotion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const WorkCard = ({ data, id }: { data: WorksDataType; id: number }) => {
	const { resolvedTheme } = useTheme();

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
					src={resolvedTheme === "dark" ? data.imageDark : data.image}
					className={`rounded-3xl w-full h-full object-cover ${id % 2 == 0 && "md:order-2"}`}
					height={400}
					width={600}
				/>
				<div
					className={` ${
						id % 2 == 0 ? "md:order-1 md:text-right text-left md:items-end" : "text-left"
					} flex flex-col gap-4 justify-center`}
				>
					<h2 className="text-3xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-6">
						{data.title}
					</h2>
					{/* <span className="flex justify-between items-center mt-5">
									<ExternalLink
										className={`h-5 w-5 lg:invisible lg:group-hover:visible`}
									/>
								</span> */}
					<p className="sm:text-lg lg:text-xl">{data.desc}</p>
					<span className="space-y-2">
						<p className="text-[17px]">{data.role}</p>
						<p className="text-[17px]">{data.lang}</p>
					</span>
					<Link
						href={data.link}
						className="px-7 py-3 flex items-center gap-2 border-2 border-current w-fit transition-all hover:border-primary linkBtn"
					>
						{data.icon} Check out
					</Link>
				</div>
			</AppMotionDiv>
		</>
	);
};

export default WorkCard;
