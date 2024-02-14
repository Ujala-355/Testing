import { render, screen} from "@testing-library/react";
import App from "./App";

test("testing with display",()=>{
    render(<App/>)
    const input=screen.getByDisplayValue("ujala")
    expect(input).toBeInTheDocument();
})

