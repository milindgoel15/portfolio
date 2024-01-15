"use client";

import { useWindowDimensions } from "@/lib/hooks/useWindowDimensions";
import {
	ReactNode,
	createContext,
	useContext
} from "react";

export type DesktopModeType = {
	isDesktopMode: boolean;
};

const DesktopContext = createContext<DesktopModeType>({
	isDesktopMode: false,
});

const DesktopModeProvider = ({ children }: { children: ReactNode }) => {
	const { windowWidth } = useWindowDimensions();
	const isDesktopMode = windowWidth > 1280;
	// const [isDesktopMode, setDesktopMode] = useState(() => {
	// 	return typeof window === "object" && window.innerWidth > 1280;
	// });

	// useEffect(() => {
	// 	const updateComp = () => {
	// 		const desktop = typeof window === "object" && window.innerWidth > 1280;
	// 		setDesktopMode(desktop);
	// 	};

	// 	updateComp();
	// 	window.addEventListener("resize", updateComp);

	// 	return () => {
	// 		window.removeEventListener("resize", updateComp);
	// 	};
	// }, []);

	return (
		<>
			<DesktopContext.Provider value={{ isDesktopMode }}>
				{children}
			</DesktopContext.Provider>
		</>
	);
};

export default DesktopModeProvider;

export const useDesktopMode = () => {
	const context = useContext(DesktopContext);
	if (!context) {
		throw new Error(
			"useDesktopMode must be used within a DesktopModeProvider"
		);
	}
	return context;
};
