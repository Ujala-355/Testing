import { render, screen } from "@testing-library/react";
import App from "./App";

test("getLabelText multiple", () => {
  render(<App />);
    const inputs=screen.getAllByLabelText("Skills");
    // expect(inputs[3]).toBeInTheDocument();
    for (let i=0; i<inputs.length;i++){
        expect(inputs[i]).toBeInTheDocument();
        expect(inputs[i]).toHaveValue("ujala");
    }
});