import {fireEvent,render,screen} from "@testing-library/react";
import App from "../App";

test("Click Event test case on button new folder",()=>{
    render(<App/>)
    const b=screen.getByRole("button");
    fireEvent.click(b);
    expect (screen.getByText("update data")).toBeInTheDocument();
})