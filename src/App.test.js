import { render,screen,within} from "@testing-library/react";
import App from "./App";

test("Test with within function",()=>{
    render(<App/>)
    let element=screen.getByText("Hello World");
    let subElement=within(element).getByText("hello p1 tag");
    expect(element).toBeInTheDocument();
    expect(subElement).toBeInTheDocument();
})