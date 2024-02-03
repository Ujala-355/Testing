
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>First React Test case</h1>
        <img title="12 img papi 5675" src="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg" alt="img 1"/>
    </div>
  );
}

export default App;

// import React,{useState,useMemo} from "react";
// const Memo=()=>{
//     const [one,setOne]=useState(0);
//     const [two,setTwo]=useState(0);

//     function increment(){
//         setOne(one+1);
//     }
//     function decrement(){
//         setTwo(two-1);
//     }
//     const isEven=useMemo(()=>{
//       for(let i=0; i<10000000000; i++){
//           return one%2===0;
//       }
//     },[one])
//     return(
//         <>
//             <button onClick={increment}>Count one {one}</button>
//             <button onClick={decrement}>Count Two {two}</button>
//         </>
//     )
// }
// export default Memo;