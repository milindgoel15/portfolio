import { ReactNode } from "react";

type FormFieldProp = {
	label: string | ReactNode;
	inputId: string;
	children?: ReactNode;
};

const FormField = ({ inputId, label, children }: FormFieldProp) => {
	return (
		<>
			<span className="flex flex-col items-start gap-2">
				<label
					htmlFor={inputId}
					className="font-bold text-2xl text-primaryColor"
				>
					{label}
				</label>

				{children}
			</span>
		</>
	);
};

export default FormField;
