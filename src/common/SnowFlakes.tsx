import Snowfall from "react-snowfall";
import dynamic from "next/dynamic";
import { useDesktopMode } from "../hooks/useDesktopMode";

let SnowFlakes = () => {
	let isWinter = true;
	let { isDesktopMode } = useDesktopMode();

	return (
		<>
			{isWinter && isDesktopMode && (
				<Snowfall
					snowflakeCount={30}
					style={{
						position: "fixed",
						width: "100vw",
						height: "100vh",
					}}
				/>
			)}
		</>
	);
};

export default dynamic(() => Promise.resolve(SnowFlakes), {
	ssr: false,
});
