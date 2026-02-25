import ContactForm from "@/lib/features/contact/ContactForm";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as captcha from "@/lib/utils/captcha_handler";
import * as api from "@/lib/utils/mail_handler";

jest.mock("../src/lib/utils/captcha_handler");
jest.mock("../src/lib/utils/mail_handler");

describe("ContactForm", () => {
	it("shows error if form validation fails", async () => {
		const user = userEvent.setup();

		render(<ContactForm />);

		await user.click(screen.getByRole("button", { name: /Send Message/i }));

		expect(await screen.findByText(/required/i)).toBeInTheDocument();
	});

	it("submits form successfully", async () => {
		const user = userEvent.setup();

		(captcha.verifyCaptchaToken as jest.Mock).mockResolvedValue({
			status: 200,
		});

		(api.processForm as jest.Mock).mockResolvedValue({
			status: 201,
			body: "Form submitted successfully",
		});

		render(<ContactForm />);

		await user.type(screen.getByLabelText(/First Name*/i), "Milind");
		// await user.type(screen.getByLabelText(/lastName/i), "Goel");
		await user.type(screen.getByLabelText(/Email*l/i), "milind@test.com");
		await user.type(screen.getByLabelText(/Message*/i), "Hello there");

		await user.click(screen.getByRole("button", { name: /Send Message/i }));

		await waitFor(() => {
			expect(api.processForm).toHaveBeenCalled();
		});
	});
});
