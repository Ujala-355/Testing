import {useState} from "react";
import "./App.css"
import handleOtherMethod from "./helper"
function App(){
    const [data,setData]=useState("");
    const handleData=()=>{
        setData("hello")
    }
    
    return(
        <>
            <div className="App">
                <h1>Functional Component method testing</h1>
                <button data-testid="btn1" onClick={handleData}>update </button>
                <button onClick={handleOtherMethod}>click</button>
                <h1>{data}</h1>
            </div>
        </>
    )
}
export default App;