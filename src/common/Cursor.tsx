import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useDesktopMode } from "../hooks/useDesktopMode";

const AnimatedCursor = dynamic(
	() => import("react-animated-cursor-ts").then((mod) => mod.AnimatedCursor),
	{
		ssr: false,
	}
);

let Cursor = (): JSX.Element => {
	let { isDesktopMode } = useDesktopMode();
	let { resolvedTheme } = useTheme();

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
					innerScale={2.5}
					outerScale={0.8}
					trailingSpeed={18}
					clickables={["a", "button", ".heading"]}
				/>
			)}
		</>
	);
};

export default Cursor;
