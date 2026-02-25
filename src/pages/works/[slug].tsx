import { GetStaticPaths, GetStaticProps } from "next";

import React from "react";

import { projects } from "@/core/data/ProjectData";
import { ProjectType } from "@/core/data/ProjectType";
import Header from "@/lib/common/Header";
import LanguageItem from "@/lib/components/LanguageItem";
import GitHub from "@/lib/Icons/social/GitHub";
import { Globe } from "lucide-react";
import Link from "next/link";

type PageProps = {
	project: ProjectType;
};

export default function ProjectPage({ project }: PageProps) {
	if (!project) {
		return <div className="p-10">Project not found</div>;
	}

	return (
		<main className="min-h-screen ">
			<Header />
			<div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
				{/* ------------------------ HERO SECTION ------------------------ */}
				<section className="space-y-10">
					{/* <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
						<Image
							src={project.coverImage}
							alt={project.title}
							fill
							className="object-cover"
						/>
					</div> */}

					<div className="space-y-4">
						<h1 className="text-4xl font-bold">{project.title}</h1>
						<p className="dark:text-gray-100">
							{project.role} • {project.duration}
						</p>

						<div className="flex flex-wrap gap-2">
							{project.techStack.map((tech) => (
								<LanguageItem key={tech} tech={tech} />
							))}
						</div>

						<div className="flex gap-4 pt-4">
							{project.liveUrl && (
								<Link
									href={project.liveUrl}
									target="_blank"
									className="px-4 py-2 bg-black text-white rounded-lg flex items-center gap-2 w-fit transition-all hover:bg-primary linkBtn shadow"
								>
									<Globe className="w-5 h-5" />
									Live Site
								</Link>
							)}

							{project.githubUrl && (
								<Link
									href={project.githubUrl}
									target="_blank"
									className="px-4 py-2 text-black dark:text-white rounded-lg flex items-center gap-2 w-fit border-2 transition-all hover:border-primary linkBtn shadow"
								>
									<GitHub className="w-5 h-5 fill-black dark:fill-white" />
									GitHub Page
								</Link>
							)}

							{project.otherUrls &&
								project.otherUrls.map((item, idx) => (
									<Link
										key={idx}
										href={item.url}
										target="_blank"
										className="px-4 py-2 text-black dark:text-white rounded-lg flex items-center gap-2 w-fit border-2 transition-all hover:border-primary linkBtn shadow"
									>
										{item.label}
									</Link>
								))}
						</div>
					</div>
				</section>

				{/* ------------------------ SNAPSHOT GRID ------------------------ */}
				{/* <section className="grid md:grid-cols-3 gap-6">
					<SnapshotCard label="Role" value={project.role} />
					<SnapshotCard label="Duration" value={project.duration} />
					<SnapshotCard label="Tech Stack" value={project.techStack.join(", ")} />
				</section> */}

				{/* ------------------------ OVERVIEW ------------------------ */}
				<Section title="Overview">
					<p>{project.overview}</p>
				</Section>

				{/* ------------------------ PROBLEM ------------------------ */}
				<Section title="The Problem">
					<p>{project.problem}</p>
				</Section>

				{/* ------------------------ SOLUTION ------------------------ */}
				<Section title="The Solution">
					<p>{project.solution}</p>
				</Section>

				{/* ------------------------ ARCHITECTURE ------------------------ */}
				<Section title="Architecture & Technical Decisions">
					<div className="space-y-6">
						{project.architecture.map((item) => (
							<div
								key={item.title}
								className="p-6 border border-gray-700 dark:border-gray-200 rounded-2xl"
							>
								<h3 className="font-semibold mb-2">{item.title}</h3>
								<p className="text-gray-800 dark:text-gray-300">{item.description}</p>
							</div>
						))}
					</div>
				</Section>

				{/* ------------------------ PERFORMANCE ------------------------ */}
				{project.performance && (
					<Section title="Performance & Optimization">
						<div className="grid md:grid-cols-2 gap-6">
							{project.performance.map((metric) => (
								<div
									key={metric.title}
									className="p-6 border border-gray-700 dark:border-gray-200 rounded-2xl"
								>
									<p className="text-sm dark:text-gray-100">{metric.title}</p>
									<p className="text-xl font-bold mt-2">{metric.value}</p>
								</div>
							))}
						</div>
					</Section>
				)}

				{/* ------------------------ BULLET SECTIONS ------------------------ */}
				{project.challenges && (
					<Section title="Challenges & Tradeoffs">
						<BulletList items={project.challenges} />
					</Section>
				)}

				{project.impact && (
					<Section title="Impact & Results">
						<BulletList items={project.impact} />
					</Section>
				)}

				{project.lessonsLearned && (
					<Section title="Lessons Learned">
						<BulletList items={project.lessonsLearned} />
					</Section>
				)}

				{project.futureImprovements && (
					<Section title="Future Improvements">
						<BulletList items={project.futureImprovements} />
					</Section>
				)}

				{/* ------------------------ CTA ------------------------ */}
				<section className="text-center pt-12 space-y-6">
					<h2 className="text-2xl font-semibold">
						Interested in building scalable systems like this?
					</h2>
					<div className="flex justify-center gap-4">
						<Link href="/contact" className="px-6 py-3 bg-primary text-white rounded-xl">
							Contact Me
						</Link>
						<Link href="/works" className="px-6 py-3 border border-gray-300 rounded-xl">
							View More Projects
						</Link>
					</div>
				</section>
			</div>
		</main>
	);
}

/* -------------------------------------------------------------------------- */
/*                          SMALL INTERNAL COMPONENTS                         */
/* -------------------------------------------------------------------------- */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<section className="space-y-4">
			<h2 className="text-2xl font-semibold">{title}</h2>
			<div className="text-gray-800 dark:text-gray-300 leading-relaxed">{children}</div>
		</section>
	);
}

function BulletList({ items }: { items: string[] }) {
	return (
		<ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-300">
			{items.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
}

/* -------------------------------------------------------------------------- */
/*                       STATIC GENERATION (SSG)                              */
/* -------------------------------------------------------------------------- */

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: projects.map((project) => ({
			params: { slug: project.slug },
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const project = projects.find((p) => p.slug === params?.slug);

	return {
		props: {
			project,
		},
	};
};
