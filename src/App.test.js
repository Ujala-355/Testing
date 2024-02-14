import { render, screen} from "@testing-library/react";
import App from "./App";

test("testing with display",()=>{
    render(<App/>)
    const input=screen.getByDisplayValue("ujala")
    expect(input).toBeInTheDocument();
})
test("textarea testing with display value",()=>{
    render(<App/>)
    const textarea=screen.getByDisplayValue("Ujala saini")
    expect(textarea).toBeInTheDocument();
})