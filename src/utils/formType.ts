import * as z from "zod";

export const ContactFormSchema = z.object({
	firstName: z
		.string()
		.min(3, "first name must contain atleast 3 characters!"),
	lastName: z.string().optional(),
	email: z.string().email("Must be a valid e-mail!"),
	message: z.string().min(1, "Must contain your message!"),
});

export type ContactFormType = z.infer<typeof ContactFormSchema>;

export const initialFormState: ContactFormType = {
	firstName: "",
	lastName: "",
	email: "",
	message: "",
};
