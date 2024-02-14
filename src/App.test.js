import { render, screen } from "@testing-library/react";
import App from "./App";

test("single button testing",()=>{
    render(<App/>)
    const btn=screen.getByText("Login");
    expect(btn).toBeInTheDocument();
})
test("single p testing",()=>{
    render(<App/>)
    const btn=screen.getByText("Login");
    expect(btn).toBeInTheDocument();
})

test("single h1 tag testing",()=>{
    render(<App/>)
    const H=screen.getByText("H1 Tag testing")
    expect(H).toBeInTheDocument();
})