type VerifyTokenProps = {
	secret: string;
	token: string;
};

export type GoogleCaptchaApiType = {
	success: true | false;
	challenge_ts: Date; // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
	hostname: string; // the hostname of the site where the reCAPTCHA was solved
	errorcodes: string[]; // optional
};

export const googleCaptchaVerify = async ({ secret, token }: VerifyTokenProps) => {
	const response = await fetch(
		`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			// body: JSON.stringify({
			// 	secret: secret,
			// 	response: token,
			// }),
		}
	);
	const data = (await response.json()) as GoogleCaptchaApiType;
	return data;
};

export const verifyCaptchaToken = async (token: string) => {
	const response = await fetch("/api/verify-token", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			token: token,
		}),
	});
	const data = await response.json();
	return data;
};
