import { render, screen } from "@testing-library/react";
import App from "./App";

test("Hello есть в приложении", async () => {
	render(<App />);
	const hello = screen.getByText("Hello");
	expect(hello).toBeInTheDocument();
});
