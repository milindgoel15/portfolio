import { ContactFormType } from "./formType";

export const processForm = async (data: ContactFormType) => {
	const res = await fetch("/api/contact", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (res && res.ok) {
		const data = await res.json();
		return data;
	}
	return "There was a problem communicating with the mail server. Please try again later!";
};
