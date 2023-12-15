import { AppButton } from "@/src/lib/AppButton";
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
