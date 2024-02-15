import { render, screen} from "@testing-library/react";
import App from "./App";

// test("test imge element with alt text",()=>{
//     render(<App/>);
//     const img=screen.getByAltText("dummy Img")
//     expect(img).toBeInTheDocument();
// })
test("test multiple imge element with alt text",()=>{
    render(<App/>);
    const img=screen.getAllByAltText("dummy Img")
    expect(img[0]).toBeInTheDocument();
    for (let i=0; i<img.length; i++){
        expect(img[i]).toBeInTheDocument()
    }
})