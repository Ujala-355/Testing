import { render, screen } from "@testing-library/react";
import App from "./App";

test("tewst element with find by",async() => {
  render(<App />);
  const find=await screen.findByText("data found",{},{timeout:4000});
  expect(find).toBeInTheDocument();
});
