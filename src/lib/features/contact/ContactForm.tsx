"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import FormInput from "@/lib/components/contact/FormInput";
import FormTextArea from "@/lib/components/contact/FormTextArea";
import { recaptchaSiteKey } from "@/lib/utils";
import { verifyCaptchaToken } from "@/lib/utils/captcha_handler";
import { getErrorMessage } from "@/lib/utils/error_handler";
import { ContactFormSchema, ContactFormType, initialFormState } from "@/lib/utils/formType";
import { processForm } from "@/lib/utils/mail_handler";

const ContactForm = () => {
	const [isDisabled, setDisabled] = useState(false);

	const captchaRef = useRef<ReCAPTCHA>(null);

	const { handleSubmit, register, reset, formState } = useForm({
		defaultValues: initialFormState,
		resolver: zodResolver(ContactFormSchema),
		mode: "onChange",
		reValidateMode: "onChange",
	});
	const [isVerified, setVerified] = useState(false);
	const [isSubmitted, setSubmitted] = useState(false);

	const handleContactFormSubmit: SubmitHandler<ContactFormType> = async (data) => {
		const result = ContactFormSchema.safeParse(data);

		if (!result.success) {
			toast.error("Data appears to be invalid! Please cross-check your input fields.");
			return;
		}
		if (!captchaRef || !captchaRef.current || typeof captchaRef.current == "string") {
			toast.error("Failed to generate google recaptcha!");
			return;
		}
		const token = captchaRef.current.getValue();

		if (token === null || token === "") {
			toast.error("Please verify that you are not a robot!");
			return;
		}

		const isValidToken = await verifyCaptchaToken(token);

		if (isValidToken.status !== 200) {
			toast.error(
				"Sorry, we were unable to process your form submission. Our systems have detected automated activity, and we require human interaction to complete this action. Please try again or contact support for further assistance."
			);
			return;
		}
		try {
			setVerified(true);
			setDisabled(true);
			const data = await processForm(result.data);

			if (typeof data == "string") {
				toast.error(data);
				return;
			}
			if (data.status != 201) {
				toast.error(data.body);
				return;
			}
			setSubmitted(true);
			toast.success(data.body);
			return;
		} catch (error) {
			setDisabled(false);
			const msg = getErrorMessage(error);
			toast.error(msg);
			return;
		} finally {
			setDisabled(false);
		}
	};

	useEffect(() => {
		if (formState.isSubmitSuccessful && isVerified && isSubmitted) {
			reset(initialFormState);
			if (captchaRef != null && captchaRef.current !== null) {
				captchaRef.current.reset();
			}
		}
	}, [formState, reset, isVerified, isSubmitted]);

	return (
		<>
			<section className="flex flex-col items-start bg-inverseHighlight dark:bg-highlight rounded-xl py-8 px-4 fold:px-8 lg:px-12 z-20">
				<form
					onSubmit={handleSubmit((data) => handleContactFormSubmit(data))}
					className="flex flex-col w-full gap-4 py-4"
				>
					<span className="flex flex-col lg:flex-row w-full gap-6">
						<FormInput
							inputId="firstName"
							inputType="text"
							label="First Name*"
							inputStyle={`${formState.errors?.firstName && "border-red-400"} flex-1`}
							placeholder="John"
							{...register("firstName")}
						>
							{formState.errors?.firstName && formState.errors.firstName.message
								? formState.errors.firstName.message
								: ""}
						</FormInput>

						<FormInput
							inputId="lastName"
							inputType="text"
							label="last Name"
							inputStyle={`${formState.errors?.lastName && "border-red-400"} flex-1`}
							placeholder="Doe"
							{...register("lastName")}
						>
							{formState.errors?.lastName && formState.errors.lastName.message
								? formState.errors.lastName.message
								: ""}
						</FormInput>
					</span>
					<FormInput
						inputId="email"
						inputType="email"
						label="Email*"
						inputStyle={`${formState.errors?.email && "border-red-400"} flex-1`}
						placeholder="johndoe@gmail.com"
						{...register("email")}
					>
						{formState.errors?.email && formState.errors.email.message
							? formState.errors.email.message
							: ""}
					</FormInput>
					<FormTextArea
						inputId="message"
						label="Message*"
						inputStyle={`${formState.errors?.message && "border-red-400"} flex-1`}
						placeholder="Enter your message"
						{...register("message")}
					>
						{formState.errors?.message && formState.errors.message.message
							? formState.errors.message.message
							: ""}
					</FormTextArea>
					<ReCAPTCHA sitekey={recaptchaSiteKey} size="normal" ref={captchaRef} />
					<button
						disabled={isDisabled}
						type="submit"
						className={`${
							isDisabled
								? "bg-gray-600 cursor-not-allowed text-white"
								: "outline-0 hover:outline hover:outline-2 text-white dark:text-black bg-blue-800 outline-slate-400 dark:bg-blue-300  dark:outline-slate-500"
						}  rounded-lg py-3 text-lg`}
					>
						{isDisabled ? "Sending..." : "Send Message"}
					</button>
				</form>
				<p className="italic text-sm">*Fill in the required information above</p>
			</section>
		</>
	);
};

export default ContactForm;
