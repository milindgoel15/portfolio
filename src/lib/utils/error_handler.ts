import toast from "react-hot-toast";

export const throwErrorMessage = (error: unknown) => {
	if (error instanceof Error) {
		toast.error(error.message);
		return;
	}
	if (
		error &&
		typeof error === "object" &&
		"message" in error &&
		typeof error.message === "string"
	) {
		toast.error(error.message);
		return;
	}
	if (typeof error === "string") {
		toast.error(error);
		return;
	}

	toast.error(
		"Something went wrong with the request! Check logs for more information or contact developers."
	);
	return;
};

export const getErrorMessage = (error: unknown, errorClass?: any) => {
	if (
		errorClass &&
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

export const getErrorCode = (error: unknown, errorClass?: any) => {
	if (
		errorClass &&
		error instanceof errorClass &&
		error &&
		typeof error === "object"
	) {
		if ("code" in error && typeof error.code === "number") {
			return error.code;
		}
		if ("code" in error && typeof error.code === "string") {
			return error.code;
		}
		if (
			"name" in error &&
			error.name === "HTTPError" &&
			"statusCode" in error &&
			error.statusCode
		) {
			return error.statusCode;
		}
	}
	// explicit "code" property:

	if (error) {
		if (
			typeof error === "object" &&
			"code" in error &&
			typeof error.code === "number"
		) {
			return error.code;
		}
		if (error instanceof Error) {
			if ("code" in error && typeof error.code == "number") {
				return error.code;
			}

			if ("statusCode" in error && typeof error.statusCode === "number") {
				return error.statusCode;
			}
			if (
				error.name === "HTTPError" &&
				"statusCode" in error &&
				typeof error.statusCode === "number"
			) {
				return error.statusCode;
			}
		}
	}

	// Check for common patterns in generic errors:

	return 500;
};
