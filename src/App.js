import React,{useState} from 'react';
const App = () => {
    const [data,setData]=useState("")
    return (
        <>
            <div>
                <h1>{data}</h1>
                <button onClick={()=>setData("Welcome")}>Click me </button>
            </div>
        </>
    );
};
export default App;
