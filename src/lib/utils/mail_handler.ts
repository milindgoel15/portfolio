import { fetchHandler } from "./fetch_handler";
import { ContactFormType } from "./formType";

export const processForm = async (data: ContactFormType) => {
	return await fetchHandler<string>(async () => {
		return await fetch("/api/contact", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
	});
};
