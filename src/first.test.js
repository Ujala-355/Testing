import {render,screen} from "@testing-library/react";
import App from './App';

test("First React Test case",()=>{
    render(<App/>);
    const text=screen.getByText("First React Test case");
    expect (text).toBeInTheDocument();
})

test (" hello First React Test case",()=>{
    render(<App/>);
    const text=screen.getByText("First React Test case");
    const title=screen.getByTitle(/img papi/i)
    expect (text).toBeInTheDocument();
    expect (title).toBeInTheDocument()
})

test("Input test case",()=>{
    render (<App/>)
    let checkInput=screen.getByRole("textbox");// textBox is predefine
    let checkPlaceholder=screen.getByPlaceholderText("enter your papi name");
    expect (checkInput).toBeInTheDocument();
    expect (checkPlaceholder).toBeInTheDocument();
    expect (checkInput).toHaveAttribute("name","papi");
    expect (checkInput).toHaveAttribute("id","papiId")
});


describe("UI test case group 1",()=>{
    test("test case 1",()=>{
        render(<App/>)
        let checkInput=screen.getByRole("textbox");
        expect(checkInput).toHaveAttribute("name","papi")
    })
})
describe("UI test case group 2",()=>{
    test("test case 1",()=>{
        render(<App/>)
        let checkInput=screen.getByRole("textbox");
        expect(checkInput).toHaveAttribute("name","papi")
    })
})