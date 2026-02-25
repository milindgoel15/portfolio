import { projects } from "@/core/data/ProjectData";
import LanguageItem from "@/lib/components/LanguageItem";
import { AppMotionDiv } from "@/lib/components/motion/AppMotion";

import Image from "next/image";
import Link from "next/link";

const Featured = () => {
	const featuredProjects = projects.filter((project) => project.featured);

	return (
		<>
			<section className="py-20">
				<div className="max-w-6xl mx-auto px-6">
					<div className="mb-12 text-center">
						<h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
						<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
							Selected work demonstrating my approach to scalable frontend architecture and
							product-focused engineering.
						</p>
					</div>

					{/* Project Grid */}
					<div className="grid md:grid-cols-2 gap-10">
						{featuredProjects.map((project, idx) => (
							<AppMotionDiv
								key={idx}
								initial={{ opacity: 0, translateY: "10px" }}
								whileInView={{ opacity: 1, translateY: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.3,
									delay: idx * 0.1,
								}}
								className="rounded-2xl shadow-sm  bg-inverseSurface text-black dark:bg-altBackground dark:text-white backdrop-blur-lg "
							>
								{/* Image */}
								<div className="relative h-60 w-full ">
									<Image
										src={project.coverImage.light}
										alt={project.title}
										fill
										className="object-cover dark:hidden block rounded-t-2xl"
									/>
									<Image
										src={project.coverImage.dark}
										alt={project.title}
										fill
										className="object-cover dark:block hidden rounded-t-2xl"
									/>
								</div>

								{/* Content */}
								<div className="p-6 space-y-4">
									<h3 className="text-xl font-semibold">{project.title}</h3>

									<p className="text-muted-foreground text-sm">{project.overview}</p>

									{/* Tech Stack */}
									<div className="flex flex-wrap gap-2">
										{project.techStack.map((tech) => (
											<LanguageItem key={tech} tech={tech} />
										))}
									</div>

									<Link
										href={`/works/${project.slug}`}
										className="inline-block pt-4 text-sm font-medium underline underline-offset-4 hover:text-primary transition"
									>
										View Case Study →
									</Link>
								</div>
							</AppMotionDiv>
						))}
					</div>

					{/* View All CTA */}
					<div className="mt-12 text-center">
						<Link
							href="/works"
							className="inline-block px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
						>
							View All Projects
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default Featured;
