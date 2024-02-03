// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

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