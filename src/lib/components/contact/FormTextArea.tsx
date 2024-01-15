import React, { ForwardedRef, forwardRef } from "react";
import FormField from "./FormField";

type FormTextAreaProp = React.DetailedHTMLProps<
	React.TextareaHTMLAttributes<HTMLTextAreaElement>,
	HTMLTextAreaElement
> & {
	label: string;
	inputId: string;
	inputStyle?: string;
	children?: string;
};

const FormTextArea = forwardRef(
	(
		{ inputId, label, inputStyle, children, ...props }: FormTextAreaProp,
		ref: ForwardedRef<HTMLTextAreaElement>
	) => {
		return (
			<>
				<FormField label={label} inputId={inputId}>
					<span className="flex flex-col w-full gap-1 items-start">
						<textarea
							ref={ref}
							name={inputId}
							id={inputId}
							cols={30}
							rows={4}
							className={`w-full  rounded-lg dark:bg-background text-lg dark:text-white outline-none px-3 py-4 border-2 border-gray-700 ${inputStyle} `}
							{...props}
						></textarea>
						<p className="text-sm italic text-red-700 dark:text-red-300">
							{children}
						</p>
					</span>
				</FormField>
			</>
		);
	}
);

FormTextArea.displayName = "ContactFormTextArea";

export default FormTextArea;
