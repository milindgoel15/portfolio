import { useContext, useEffect } from "react";
import Snowfall from "react-snowfall";
import dynamic from "next/dynamic";
import DesktopContext from "../contexts/DesktopContext";

let SnowFlakes = () => {
	let { isDesktopMode } = useContext(DesktopContext);
	let isWinter = false;

	let renderSnow = isDesktopMode && (
		<Snowfall
			snowflakeCount={30}
			style={{
				position: "fixed",
				width: "100vw",
				height: "100vh",
			}}
		/>
	);

	return <>{isWinter && renderSnow}</>;
};

export default dynamic(() => Promise.resolve(SnowFlakes), {
	ssr: false,
});
