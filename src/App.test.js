// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// import {render,screen} from "@testing-library/react";
// import App from './App';

// test("First React Test case",()=>{
//     render(<App/>);
//     const text=screen.getByText("First React Test case");
//     expect (text).toBeInTheDocument();
// })

// test (" hello First React Test case",()=>{
//     render(<App/>);
//     const text=screen.getByText("First React Test case");
//     const title=screen.getByTitle(/img papi/i)//(/text/i) yh use karne se yh upper lower case check nahi karta hai tabi tast case pass hoga
//     expect (text).toBeInTheDocument();
//     expect (title).toBeInTheDocument()
// })

// test("Input test case",()=>{
//     render (<App/>)
//     let checkInput=screen.getByRole("textbox");// textBox is predefine
//     let checkPlaceholder=screen.getByPlaceholderText("enter your papi name");
//     expect (checkInput).toBeInTheDocument();
//     expect (checkPlaceholder).toBeInTheDocument();
//     expect (checkInput).toHaveAttribute("name","papi");
//     expect (checkInput).toHaveAttribute("id","papiId")
// });


// make input box in the component
// Define state and use with on change event
// import component in test file
// Write code for test case
import {fireEvent,render,screen} from "@testing-library/react";
import App from "./App";
test("on change event testing 1",()=>{
    render(<App/>)
    let input=screen.getByRole("textbox");
    fireEvent.change(input,{target:{value:"a"}});
    expect(input.value).toBe("atest")
});

beforeAll(()=>{
    console.log("before all hook")
})

test("Click Event test case on button",()=>{
    render(<App/>)
    const b=screen.getByRole("button");
    fireEvent.click(b);
    expect (screen.getByText("update data")).toBeInTheDocument();
})

test("Snapshot for app component",()=>{
    const conatiner=render(<App/>)
    expect(conatiner).toMatchSnapshot()
})

