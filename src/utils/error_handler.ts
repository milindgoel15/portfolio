export const getErrorMessage = (error: unknown, errorClass?: any) => {
	if (
		error instanceof errorClass &&
		typeof error === "object" &&
		error &&
		"message" in error &&
		typeof error.message === "string"
	) {
		return error.message;
	}
	if (error instanceof Error) {
		return error.message;
	}
	if (
		error &&
		typeof error === "object" &&
		"message" in error &&
		typeof error.message === "string"
	) {
		return error.message;
	}
	if (typeof error === "string") {
		return error;
	}

	return "Something went wrong with the request! Check logs for more information or contact developers.";
};
