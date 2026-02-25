import Link from "next/link";

export default function CTA() {
	return (
		<section className="py-16">
			<div className=" mx-auto px-6 text-center">
				<h2 className="text-3xl md:text-4xl font-bold leading-tight">
					Let’s build something impactful together.
				</h2>

				<p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
					While I’m currently building and scaling products in my full-time role, I remain open
					to high-impact opportunities and collaborations where thoughtful engineering truly
					matters.
				</p>

				{/* Buttons */}
				<div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
					<Link
						href="/contact"
						className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
					>
						Get in Touch
					</Link>

					<Link
						href="/resume"
						className="px-8 py-3 rounded-xl border border-border font-medium hover:bg-muted transition"
					>
						View Resume
					</Link>
				</div>
			</div>
		</section>
	);
}
