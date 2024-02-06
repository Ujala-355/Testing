
import './App.css';
import {useState} from "react";
function App() {
    const [data,setData]=useState("");
    const [text,setText]=useState("");
  return (
    <div className="App">
        <h1>First React Test case</h1>
        <h1>Test Click Event with Button</h1>
        <h1>Snapshot testing</h1>
        <br/>
        <img title="12 img papi 5675"  src="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg" alt="img 1"/>
        <br/>
        <input type="text" value={data} onChange={(e)=>setData(e.target.value+"test")}/>
        <br/>
        <button onClick={()=>setText("update data")}>Update Data</button>
        <h1>{text}</h1>
    </div>
  );
}
                         
export default App;
