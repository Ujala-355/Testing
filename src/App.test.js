import { render, screen } from "@testing-library/react";
import App from "./App";

test("getAllByPlaceholderText multiple", () => {
    render(<App />);
    const inputs=screen.getAllByPlaceholderText("enter username")
    // expect(inputs[1]).toBeInTheDocument();
    for(let i=0; i<inputs.length; i++){
        expect(inputs[i]).toBeInTheDocument();

    }
});