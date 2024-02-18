import React from 'react';
const App = (props) => {
    return (
        <>
            <div>
                <h1>Functional Props Testing and Mocking</h1>
                <button onClick={props.testFunction}>Click</button>
            </div>
        </>
    );
};
export default App;
