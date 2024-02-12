import { render, screen } from "@testing-library/react";
import App from "./App";

test("getLabelText multiple", () => {
    render(<App />);
    const inputs=screen.getByPlaceholderText("enter username");
    expect(inputs).toBeInTheDocument();
 
});