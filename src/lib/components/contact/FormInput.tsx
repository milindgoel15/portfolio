import React, { ForwardedRef, forwardRef } from "react";
import FormField from "./FormField";

type FormInputProp = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	label: string;
	inputId: string;
	inputType: React.HTMLInputTypeAttribute;
	inputStyle?: string;
	children?: string;
};

const FormInput = forwardRef(
	(
		{
			inputId,
			label,
			inputType,
			inputStyle,
			children,
			...props
		}: FormInputProp,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		return (
			<>
				<FormField label={label} inputId={inputId}>
					<span className="flex flex-col w-full gap-1 items-start">
						<input
							ref={ref}
							type={inputType}
							id={inputId}
							className={`${inputStyle} w-full dark:bg-background border-2 border-gray-700 rounded-lg text-lg dark:text-white px-3 py-3 `}
							{...props}
						/>
						<p className="text-sm italic text-red-700 dark:text-red-300">
							{children}
						</p>
					</span>
				</FormField>
			</>
		);
	}
);

FormInput.displayName = "ContactFormInput";

export default FormInput;
