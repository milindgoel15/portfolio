/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SnowModeProvider, { useSnowMode } from "@/lib/hooks/useSnowMode";

// Test component to consume the hook
const TestComponent = () => {
	const { isWinter, toggleSnow } = useSnowMode();

	return (
		<div>
			<span data-testid="status">{isWinter ? "winter-on" : "winter-off"}</span>
			<button onClick={toggleSnow}>toggle</button>
		</div>
	);
};

describe("SnowModeProvider", () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it("uses default state when no localStorage value exists", () => {
		render(
			<SnowModeProvider>
				<TestComponent />
			</SnowModeProvider>,
		);

		expect(screen.getByTestId("status")).toBeInTheDocument();
	});

	it("reads initial value from localStorage", () => {
		localStorage.setItem("isWinter", JSON.stringify(true));

		render(
			<SnowModeProvider>
				<TestComponent />
			</SnowModeProvider>,
		);

		expect(screen.getByText("winter-on")).toBeInTheDocument();
	});

	it("toggles winter mode correctly to off", async () => {
		const user = userEvent.setup();

		render(
			<SnowModeProvider>
				<TestComponent />
			</SnowModeProvider>,
		);

		const button = screen.getByRole("button", { name: /toggle/i });

		await user.click(button);

		// wait for re-render
		await waitFor(() => {
			expect(screen.getByText("winter-off")).toBeInTheDocument();
		});

		expect(localStorage.getItem("isWinter")).toBe(JSON.stringify(false));
	});
});
