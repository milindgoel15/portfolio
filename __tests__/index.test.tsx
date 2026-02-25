import SkillsData from "@/core/data/SkillsData";
import CTA from "@/lib/features/home/cta";
import { Hero } from "@/lib/features/home/hero";
import SkillsSection from "@/lib/features/home/skills";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Hero", () => {
	it("renders hero content correctly", () => {
		render(<Hero />);

		expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();

		const heading = screen.getByText(
			/Where Innovation Meets Pixels: Shaping Ideas into Dynamic Digital Realities/i,
		);
		expect(heading).toBeInTheDocument();

		const subtitle = screen.getByText(
			/Hi! I'm Milind Goel, a Software Engineer, based in India. My primary focus is on crafting seamless and visually engaging user experiences. If you're seeking someone who can bring your digital ideas to life, count me in! I'm here and ready to make it happen./i,
		);
		expect(subtitle).toBeInTheDocument();

		expect(screen.getByText(/LET'S CONNECT/i)).toBeInTheDocument();
	});

	it("has skills section", () => {
		render(<SkillsSection />);

		expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
		const heading = screen.getByText(/Skills/i);
		expect(heading).toBeInTheDocument();

		// has all skill items from skills data
		expect(screen.getAllByRole("listitem")).toHaveLength(SkillsData.length);
	});

	it("opens resume in a new tab securely", () => {
		render(<CTA />);
		const resumeLink = screen.getByText(/View Resume/i);

		expect(resumeLink).toHaveAttribute("target", "_blank");
		expect(resumeLink).toHaveAttribute("rel", expect.stringContaining("noopener noreferrer"));
	});
});
