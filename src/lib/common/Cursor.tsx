"use client";

import { useTheme } from "next-themes";
// import AnimatedCursor from "react-animated-cursor";
import { useDesktopMode } from "@/lib/hooks/useDesktopMode";

// Import with next's dynamic import
import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
	ssr: false,
});
// const AnimatedCursor = dynamic(
// 	() => import("react-animated-cursor-ts").then((mod) => mod.AnimatedCursor),
// 	{
// 		ssr: false,
// 	}
// );

const Cursor = () => {
	const { isDesktopMode } = useDesktopMode();
	const { resolvedTheme } = useTheme();

	return (
		<>
			{isDesktopMode && (
				<AnimatedCursor
					innerSize={12}
					outerSize={60}
					outerAlpha={0.1}
					color={
						resolvedTheme === "dark"
							? "255,255,255"
							: resolvedTheme === "light"
								? "0,0,0"
								: "13,115,231"
					}
					innerScale={2}
					outerScale={0.8}
					trailingSpeed={18}
					clickables={["a", "button", ".heading"]}
				/>
			)}
		</>
	);
};

export default Cursor;
