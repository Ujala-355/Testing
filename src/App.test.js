import { render, screen } from "@testing-library/react";
import App from "./App";

test("single button testing",()=>{
    render(<App/>)
    const btn=screen.getByText("Login");
    expect(btn).toBeInTheDocument();
})
test("single p testing",()=>{
    render(<App/>)
    const btn=screen.getByText("P tag testing");
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("Ptext")
})

test("multiple h1 tag testing",()=>{
    render(<App/>)
    const H=screen.getAllByText("H1 Tag testing")
    // expect(H[0]).toBeInTheDocument();
    for (let i=0; i<H.length; i++){
        expect(H[i]).toBeInTheDocument();
    }
})