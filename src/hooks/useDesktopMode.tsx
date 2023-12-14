import {
	useState,
	useEffect,
	ReactNode,
	useContext,
	createContext,
} from "react";
import DesktopModeInterface from "../interfaces/DesktopModeInterface";

let DesktopContext = createContext<DesktopModeInterface>({
	isDesktopMode: false,
});

let DesktopModeProvider = ({ children }: { children: ReactNode }) => {
	let [isDesktopMode, setDesktopMode] = useState(() => {
		return typeof window === "object" && window.innerWidth > 1280;
	});

	useEffect(() => {
		const updateComp = () => {
			const desktop = typeof window === "object" && window.innerWidth > 1280;
			setDesktopMode(desktop);
		};

		updateComp();
		window.addEventListener("resize", updateComp);

		return () => {
			window.removeEventListener("resize", updateComp);
		};
	}, []);

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
