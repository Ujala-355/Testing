import {render,screen} from "@testing-library/react";
import App from "./App";

test("getByRole testing in custom",()=>{
    render(<App/>)
    const btn1=screen.getByRole("button",{name:"Click1"});
    const btn2=screen.getByRole("button",{name:"Click2"});
    const input1=screen.getByRole("textbox",{name:"input 1"});
    const input2=screen.getByRole("textbox",{name:"input 2"})

    expect(input1).toBeInTheDocument();
    expect(input1).toBeInTheDocument();
    expect(btn1).toBeInTheDocument();
    expect(btn2).toBeInTheDocument();
})