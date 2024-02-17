import { render, screen } from "@testing-library/react";
import App from "./App";

test("queryByText Test Case", () => {
  render(<App />);
  const buttonElement = screen.queryByText("Login");
  expect(buttonElement).toBeInTheDocument();
});
