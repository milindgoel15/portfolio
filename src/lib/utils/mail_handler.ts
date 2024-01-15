import { fetchHandler } from "./fetch_handler";
import { ContactFormType } from "./formType";

export const processForm = async (
	data: ContactFormType
) => {
	return await fetchHandler<string>(async () => {
		return await fetch("/api/contact/form", {
			method: "post",
			headers: {
				"Content-Type":
					"application/x-www-form-urlencoded",
			},
			body: JSON.stringify(data),
		});
	});
};
