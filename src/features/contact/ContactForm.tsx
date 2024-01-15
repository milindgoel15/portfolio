import FormInput from "@/src/components/contact/FormInput";
import FormTextArea from "@/src/components/contact/FormTextArea";
import { getErrorMessage } from "@/src/utils/error_handler";
import {
	ContactFormSchema,
	ContactFormType,
	initialFormState,
} from "@/src/utils/formType";
import { processForm } from "@/src/utils/mail_handler";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactForm = () => {
	const [isDisabled, setDisabled] = useState(false);

	const { handleSubmit, register, reset, getValues, setValue, formState } =
		useForm({
			defaultValues: initialFormState,
			resolver: zodResolver(ContactFormSchema),
			mode: "onChange",
			reValidateMode: "onChange",
		});

	const values = getValues();

	const handleContactFormSubmit: SubmitHandler<ContactFormType> = async (
		data
	) => {
		const result = ContactFormSchema.safeParse(data);
		if (!result.success) {
			toast.error(
				"Data appears to be invalid! Please cross-check your input fields."
			);
			return;
		}

		try {
			setDisabled(true);
			const data = await processForm(result.data);

			if (typeof data == "string") {
				toast.error(data);
				return;
			}
			if (data.status == 201) {
				toast.success(data.body);
				return;
			}
			toast.error(data.body);
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
		if (formState.isSubmitSuccessful) {
			reset(initialFormState);
		}
	}, [formState, reset]);

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
							inputStyle={`${formState.errors?.firstName && "border-red-400"
								} flex-1`}
							placeholder="John"
							{...register("firstName", {
								value: values.firstName,
								required: true,
								onChange(event) {
									event.preventDefault();
									setValue("firstName", event.target.value);
								},
							})}
						>
							{formState.errors?.firstName &&
								formState.errors.firstName.message
								? formState.errors.firstName.message
								: ""}
						</FormInput>

						<FormInput
							inputId="lastName"
							inputType="text"
							label="last Name"
							inputStyle={`${formState.errors?.lastName && "border-red-400"
								} flex-1`}
							placeholder="Doe"
							{...register("lastName", {
								value: values.lastName,
								onChange(event) {
									event.preventDefault();
									setValue("lastName", event.target.value);
								},
							})}
						>
							{formState.errors?.lastName &&
								formState.errors.lastName.message
								? formState.errors.lastName.message
								: ""}
						</FormInput>
					</span>
					<FormInput
						inputId="email"
						inputType="email"
						label="Email*"
						inputStyle={`${formState.errors?.email && "border-red-400"
							} flex-1`}
						placeholder="johndoe@gmail.com"
						{...register("email", {
							value: values.email,
							required: true,
							onChange(event) {
								event.preventDefault();
								setValue("email", event.target.value);
							},
						})}
					>
						{formState.errors?.email && formState.errors.email.message
							? formState.errors.email.message
							: ""}
					</FormInput>

					<FormTextArea
						inputId="message"
						label="Message*"
						inputStyle={`${formState.errors?.message && "border-red-400"
							} flex-1`}
						placeholder="Enter your message"
						{...register("message", {
							value: values.message,
							required: true,
							onChange(event) {
								event.preventDefault();
								setValue("message", event.target.value);
							},
						})}
					>
						{formState.errors?.message && formState.errors.message.message
							? formState.errors.message.message
							: ""}
					</FormTextArea>
					<button
						disabled={isDisabled}
						type="submit"
						className={`${isDisabled
								? "bg-gray-600 cursor-not-allowed text-white"
								: "outline-0 hover:outline hover:outline-2 text-white dark:text-black bg-blue-800 outline-slate-400 dark:bg-blue-300  dark:outline-slate-500"
							}  rounded-lg py-3 text-lg`}
					>
						{isDisabled ? "Sending..." : "Send Message"}
					</button>
				</form>
				<p className="italic text-sm">
					*Fill in the required information above
				</p>
			</section>
		</>
	);
};

export default ContactForm;
