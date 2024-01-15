"use client";

import { useEffect, useState } from "react";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export type childrenProps = {
	children: ReactNode;
	// Add any other props if needed
};

export default function NextThemeProvider({ children, ...props }: childrenProps) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<ThemeProvider attribute="class" {...props}>
			{children}
		</ThemeProvider>
	);
}
