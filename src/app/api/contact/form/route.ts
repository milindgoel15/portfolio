import {
	getErrorCode,
	getErrorMessage,
} from "@/src/utils/error_handler";
import { ContactFormType } from "@/src/utils/formType";
import { sendMail } from "@/src/utils/mail_service";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const mailUser = process.env.GMAIL_USER;
		const mailPassword = process.env.GMAIL_PASS;

		if (!mailUser || !mailPassword) {
			return NextResponse.json({
				status: 500,
				body: "Invalid env variables! Please contact the developers.",
			});
		}

		const data: ContactFormType =
			await request.json();

		const info = await sendMail(
			data,
			mailUser,
			mailPassword
		);

		if (info.accepted.length != 0) {
			return NextResponse.json({
				status: 201,
				body: "Mail sent!",
			});
		}

		return NextResponse.json({
			status: 401,
			body: "There was a problem sending this mail. Please check logs and/or contact developers! ",
		});
	} catch (error) {
		console.log(error);
		const message = getErrorMessage(error);
		const code = getErrorCode(error);

		return NextResponse.json({
			status: code,
			body: message,
		});
	}
}
