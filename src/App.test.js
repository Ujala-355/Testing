import { render, screen } from "@testing-library/react";
import App from "./App";

test("hello",()=>{
    render(<App/>)
    const d=screen.getByTestId("div-test-id")
    expect(d).toBeInTheDocument();
})
