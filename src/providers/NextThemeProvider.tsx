// "use client";

import React, { useEffect, useState } from "react";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export type childrenProps = {
	children: ReactNode;
	// Add any other props if needed
};

export function NextThemeProvider({ children, ...props }: childrenProps) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <>{children}</>;
	}

	return (
		<ThemeProvider attribute="class" {...props}>
			{children}
		</ThemeProvider>
	);
}
