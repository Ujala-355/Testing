import {fireEvent,render,screen} from "@testing-library/react";
import App from "./App";
import handleOtherMethod from "./helper"

test("method testing case",()=>{
    render(<App/>)
    const btn=screen.getByTestId("btn1");
    fireEvent.click(btn);
    expect(screen.getByText("hello")).toBeInTheDocument();
})

test("method testing case other",()=>{
    expect(handleOtherMethod()).toMatch("hi")
})