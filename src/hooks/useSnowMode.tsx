import { ReactNode, createContext, useContext, useState } from "react";

const SnowModeContext = createContext({
	isWinter: true,
	toggleSnow: () => {},
});

const SnowModeProvider = ({ children }: { children: ReactNode }) => {
	const isServer = typeof window === "undefined";

	let isWinterMode = true;

	if (!isServer) {
		isWinterMode = JSON.parse(localStorage.getItem("isWinter") ?? "true");
	}

	const [isWinter, setIsWinter] = useState(isWinterMode);

	const toggleSnow = () => {
		localStorage.setItem("isWinter", JSON.stringify(!isWinter));
		setIsWinter(!isWinter);
	};

	return (
		<>
			<SnowModeContext.Provider value={{ isWinter, toggleSnow }}>
				{children}
			</SnowModeContext.Provider>
		</>
	);
};

export default SnowModeProvider;

export const useSnowMode = () => {
	const context = useContext(SnowModeContext);
	if (!context) {
		throw new Error("useSnowMode must be used within a SnowModeProvider");
	}
	return context;
};
