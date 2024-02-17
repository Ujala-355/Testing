import { render, screen} from "@testing-library/react";
import App from "./App";
           
test("Test match with function",()=>{
    render(<App/>)
    // const dv=screen.getByText((content,element)=>content.startsWith("Hello"))
    // const dv=screen.getByText((content,element)=>content.endsWith("World"))
    // const dv=screen.getByText((content,element)=>content.endsWith("ld"))
    const dv=screen.getByText((content,element)=>content.endsWith("ld"))


    expect(dv).toBeInTheDocument();
})