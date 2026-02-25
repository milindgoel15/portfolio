import "whatwg-fetch";

jest.mock("framer-motion", () => {
	const React = require("react");

	// Generic passthrough factory
	const passthrough = (Tag: any) => {
		const Component = React.forwardRef(({ children }: any, ref: any) =>
			React.createElement(Tag, { ref }, children),
		);
		Component.displayName = `passthrough(${Tag})`;
		return Component;
	};

	// motion(Component) support
	const motion = (Component: any) => {
		const motionComponent = React.forwardRef(({ children, ...props }: any, ref: any) =>
			React.createElement(Component, { ref, ...props }, children),
		);

		motionComponent.displayName = `motion(${Component.displayName || Component.name || "Component"})`;
		return motionComponent;
	};

	// HTML tag support
	motion.div = passthrough("div");
	motion.h1 = passthrough("h1");
	motion.h2 = passthrough("h2");
	motion.h3 = passthrough("h3");
	motion.h4 = passthrough("h4");
	motion.h5 = passthrough("h5");
	motion.h6 = passthrough("h6");
	motion.p = passthrough("p");
	motion.section = passthrough("section");
	motion.header = passthrough("header");
	motion.span = passthrough("span");
	motion.li = passthrough("li");
	motion.a = passthrough("a");
	motion.Link = passthrough("a");

	return { motion };
});

jest.mock("react-google-recaptcha", () => {
	const React = require("react");

	const captchaComponent = React.forwardRef((_props: any, ref: any) => {
		React.useImperativeHandle(ref, () => ({
			getValue: () => "mock-token",
			reset: jest.fn(),
		}));
		return <div data-testid="recaptcha" />;
	});

	captchaComponent.displayName = "MockReCAPTCHA";
	return captchaComponent;
});

jest.mock("react-hot-toast", () => ({
	__esModule: true,
	default: {
		error: jest.fn(),
		success: jest.fn(),
	},
}));
