import { googleCaptchaVerify } from "@/lib/utils/captcha_handler";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method == "POST") {
		try {
			const googleSecretKey = process.env.GOOGLE_RECAPTCHA_SECRET_KEY;

			if (!googleSecretKey) {
				return res.json({
					status: 500,
					body: "Invalid env variables! Please contact the developers.",
				});
			}

			const { token }: { token: string } = req.body;

			const response = await googleCaptchaVerify({
				secret: googleSecretKey,
				token: token,
			});

			if (response.success == false) {
				return res.json({
					status: 400,
					body: "Failed to verify captcha token",
				});
			}

			return res.json({
				status: 200,
				body: "Success",
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
