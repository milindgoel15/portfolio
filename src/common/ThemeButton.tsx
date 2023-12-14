import React, { ReactNode } from "react";

type themeMode = {
	theme: string;
	setTheme: (theme: string) => void;
	buttonLabel: string;
	children: ReactNode;
};

let ThemeButton = ({ setTheme, theme, buttonLabel, children }: themeMode) => {
	return (
		<>
			<AppButton onClick={() => setTheme(theme)} title={buttonLabel}>
				{children}
			</AppButton>
		</>
	);
};

export default ThemeButton;

type AppButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
};

export const AppButton = ({ children, ...props }: AppButtonProps) => {
	return (
		<>
			<button
				{...props}
				className="group outline-0 hover:outline hover:outline-2 bg-slate-100 outline-slate-400 dark:bg-gray-800  dark:outline-slate-700 rounded-lg p-2"
			>
				{children}
			</button>
		</>
	);
};
