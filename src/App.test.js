import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("On change event testing",async ()=>{
    userEvent.setup();
    render(<App/>);
    const el=screen.getByRole("textbox")
    await userEvent.type(el,"ujala")
    expect(screen.getByText("ujala")).toBeInTheDocument();
})