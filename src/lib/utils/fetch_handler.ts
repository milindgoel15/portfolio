import { NextResponse } from "next/server";
import {
	getErrorCode,
	getErrorMessage,
} from "./error_handler";

export type ApiResponse<T> = {
	status: number;
	body: T;
};

export const fetchHandler = async <T>(
	handler: () => Promise<Response>
): Promise<ApiResponse<T> | string> => {
	return await asyncHandler<ApiResponse<T>>(
		async () => {
			const res = await handler();
			const data: ApiResponse<T> =
				await res.json();
			return data;
		}
	);
};

export const asyncHandler = async <T>(
	handler: () => Promise<T>
): Promise<T | string> => {
	try {
		return await handler();
	} catch (error) {
		console.error(error);
		const message = getErrorMessage(error);
		return message;
	}
};

export const apiHandler = async (
	handler: () => Promise<NextResponse>
): Promise<NextResponse> => {
	try {
		return await handler();
	} catch (error) {
		console.error(error);
		const message = getErrorMessage(error);
		const errorCode = getErrorCode(error);
		return NextResponse.json({
			status: errorCode,
			body: message,
		});
	}
};
