import { render, screen } from "@testing-library/react";
import User from "./User";

test("component Props Testing", () => {
  render(<User name1="saini" />);
  const user = screen.getByText(`User Name :saini`);
  expect(user).toBeInTheDocument();
});
