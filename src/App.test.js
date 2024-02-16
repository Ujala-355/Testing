import { render, screen} from "@testing-library/react";
import App from "./App";
           
// test("text match with string",()=>{
//     render(<App/>)
//     const div=screen.getByText("Hello World",{exact:false});
//     expect(div).toBeInTheDocument();
// })

test("text match with Regex",()=>{
    render(<App/>)
    // const div=screen.getByText(/Hello/);
    // const div=screen.getByText(/lo Wo/);
    // const div=screen.getByText(/Hello/i);
    const div=screen.getByText(/Hello w?orld/i);
    expect(div).toBeInTheDocument();
})