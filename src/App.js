import React,{useState} from 'react';
const App = () => {
    const [data,setData]=useState("")
    return (
        <>
            <div>
                <h1>onChage Event Testing</h1>
                <p>{data}</p>
                <input type="text" onChange={(e)=>setData(e.target.value)} placeholder="enter a name" />
            </div>
        </>
    );
};
export default App;


