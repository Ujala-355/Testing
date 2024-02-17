import { render, screen ,act} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("On change event testing",async ()=>{
    render(<App/>);
    const el=screen.getByRole("textbox")
    await act(async()=>{
        await userEvent.type(el,"ujala")
    })
    expect(screen.getByText("ujala")).toBeInTheDocument();
})