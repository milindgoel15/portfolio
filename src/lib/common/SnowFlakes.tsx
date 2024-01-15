"use client";

// import dynamic from "next/dynamic";
import Snowfall from "react-snowfall";

const SnowFlakes = ({ isWinter }: { isWinter: boolean }) => {
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

export default SnowFlakes;

// export default dynamic(() => Promise.resolve(SnowFlakes), {
// 	ssr: false,
// });
