import {
	mailHost,
	mailPort,
} from "@/core/constants";

import nodemailer from "nodemailer";
import { ContactFormType } from "./formType";

export const sendMail = async (
	formData: ContactFormType,
	mailUser: string,
	mailPassword: string
) => {
	const transport = nodemailer.createTransport({
		host: mailHost,
		port: mailPort,
		secure: true,
		auth: {
			user: mailUser,
			pass: mailPassword,
		},
	});

	const htmlData = `
    <html>
      <body>
        <h2>New Form Submission</h2>
        <p><strong>First Name:</strong> ${
				formData.firstName
			}</p>
        <p><strong>Last Name:</strong> ${
				formData.lastName ?? "Not given"
			}</p>
        <p><strong>Email:</strong> ${
				formData.email
			}</p>
        <p><strong>Message:</strong> ${
				formData.message
			}</p>
        
      </body>
    </html>
  `;

	// 	const emailBody = `
	//     Full Name: ${formData.fullname}
	//     Email: ${formData.email}
	//     Message: ${formData.message}
	//   `;

	const info = await transport.sendMail({
		from: mailUser,
		to: mailUser,
		subject: `Mail from ${formData.firstName}`,
		text: `A mail has been received from your website contact form. Check below:\n`,
		html: htmlData,
	});

	return info;
};
