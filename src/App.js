
import './App.css';
import {useState} from "react";
function App() {
    const [data,setData]=useState("");

  return (
    <div className="App">
        <h1>First React Test case</h1>
        <br/>
        <img title="12 img papi 5675"  src="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg" alt="img 1"/>
        <input type="text" value={data} onChange={(e)=>setData(e.target.value+"test")}/>
    </div>
  );
}

export default App;
