import { render} from "@testing-library/react";
import App from "./App";

test("Test case with custom query",()=>{
    render(<App/>)
    const element=document.querySelector("#testId");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Hello World")
})