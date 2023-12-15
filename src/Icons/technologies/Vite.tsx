import { motion } from "framer-motion";
import React from "react";

const ViteIcon = () => {
	return (
		<>
			<motion.svg
				initial={{ opacity: 0, scale: 0.4 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				xmlns="http://www.w3.org/2000/svg"
				className="h-72 sm:h-80 w-72 sm:w-80"
				fill="none"
				viewBox="0 0 195 156"
			>
				<path
					fill="#646CFF"
					d="m53.272 13.578.512-8.657a.306.306 0 0 1 .247-.282l8.332-1.633a.306.306 0 0 1 .353.385l-1.558 5.403a.305.305 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.37l1.095-5.3a.307.307 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.39-.354l.69-3.375a.307.307 0 0 0-.217-.357.306.306 0 0 0-.152-.003l-2.32.536a.305.305 0 0 1-.374-.316Zm14.976-7.926L62.27 6.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783l-6.791 13.55-.013.026-.015.023-.122.19a.8.8 0 0 1-1.023.29.8.8 0 0 1-.443-.892l1.029-4.981-1.12.34a.81.81 0 0 1-1.019-.579.803.803 0 0 1-.006-.353l.63-3.08-2.027.468a.807.807 0 0 1-.985-.833l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L56.566 26.69a.611.611 0 0 0 1.066-.004l11.26-20.135a.613.613 0 0 0-.644-.9Z"
				/>
			</motion.svg>
		</>
	);
};

export default ViteIcon;
