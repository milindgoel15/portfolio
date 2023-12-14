import Snowfall from "react-snowfall";
import dynamic from "next/dynamic";

let SnowFlakes = ({ isWinter }: { isWinter: boolean }) => {
	return (
		<>
			{isWinter == true && (
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
