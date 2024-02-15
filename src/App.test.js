import { render, screen} from "@testing-library/react";
import App from "./App";

test("button testing with title attribute",()=>{
    render(<App/>)
    const btn=screen.getByTitle("click");
    expect(btn).toBeInTheDocument();
})
test("span testing with title attribute",()=>{
    render(<App/>)
    const btn=screen.getAllByTitle("black spade");
    // expect(btn[0]).toBeInTheDocument();
    for (let i=0; i<btn.length; i++){
        expect(btn[i]).toBeInTheDocument();
    }
})