import SkillsData from "@/core/data/SkillsData";
import { BlobImage } from "@/lib/blobanimation/BlobAnimation";
import { AppMotionLi } from "@/lib/components/motion/AppMotion";

const SkillsSection = () => {
	return (
		<>
			<section className="flex flex-col items-center justify-center">
				<h3 className="text-4xl font-medium py-8">Skills</h3>
				<ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-4 lg:mx-8 xl:mx-24 2xl:mx-36">
					{SkillsData.map((skills, id) => (
						<AppMotionLi
							key={id}
							initial={{ opacity: 0, translateY: "10px" }}
							whileInView={{ opacity: 1, translateY: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.3,
								delay: id * 0.05,
								ease: "easeIn",
							}}
							className=" bg-inverseSurface text-black dark:bg-altBackground dark:text-white backdrop-blur-lg px-5 fold:px-8 py-6 fold:py-10 flex flex-col justify-start gap-8 rounded-lg shadow-md"
						>
							<span>{skills.icon}</span>
							<span className="flex flex-col gap-2 max-w-[90%]">
								<p className="text-xl ">{skills.title}</p>
								<p className="text-wrap">{skills.language}</p>
							</span>
						</AppMotionLi>
					))}
					<span
						className={`w-96 h-96 -mt-4 right-0 lg:block hidden pointer-events-none absolute -z-50`}
					>
						<BlobImage />
					</span>
				</ul>
			</section>
		</>
	);
};

export default SkillsSection;
