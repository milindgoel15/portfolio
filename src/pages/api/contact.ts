import { ContactFormType } from "@/lib/utils/formType";
import { sendMail } from "@/lib/utils/mail_service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method == "POST") {
		try {
			const mailUser = process.env.GMAIL_USER;
			const mailPassword = process.env.GMAIL_PASS;

			if (!mailUser || !mailPassword) {
				return res.json({
					status: 500,
					body: "Invalid env variables! Please contact the developers.",
				});
			}

			const data: ContactFormType = req.body;

			const info = await sendMail(data, mailUser, mailPassword);

			if (info.accepted.length != 0) {
				return res.json({
					status: 201,
					body: "Mail sent!",
				});
			}

			return res.json({
				status: 401,
				body: "There was a problem sending this mail. Please check logs and/or contact developers! ",
				// info: info,
			});
		} catch (error) {
			console.log(error);

			return res.json({
				status: 404,
				body: "There was a problem in completing this request! Please check logs and/or contact developers! ",
			});
		}
	}
	return res.json({
		status: 500,
		body: "Bad request!",
	});
}
