import { render, screen } from "@testing-library/react";
import App from "./App";

test("getLabelText", () => {
  render(<App />);
  const input = screen.getByLabelText("UserName");
  const checkbox=screen.getByLabelText("Skills");

  expect(input).toBeInTheDocument();
  expect(checkbox).toBeInTheDocument();
});