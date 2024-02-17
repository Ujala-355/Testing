import React, { useState ,useEffect} from 'react';

const App = () => {
    const [data, setData] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setData(true)
        },3000);
    })
    return (
        <>
        <h1>findBy and findAllBy</h1>
        {data ? <h1>data found</h1> : <h1>no data found</h1>}
        </>
    );
};
export default App;
