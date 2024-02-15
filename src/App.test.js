import { render, screen} from "@testing-library/react";
import App from "./App";
           
test("test input",()=>{
    render(<App/>);
    const input=screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("Ujala")
    // expect(input).toBeEnabled();
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute("id");
    expect(input).toHaveAttribute("data-test")
    expect(input).toHaveClass("testStyle")
})
test("test nagitive cases",()=>{
    render(<App/>);
    const btn=screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("button1")
    expect(btn).not.toHaveClass("button")
    // expect(btn).not.toHaveAttribute("id")
})