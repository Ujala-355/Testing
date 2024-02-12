const App=()=>{
    return(
        <>
            <div>
                <h1>RTL Query: getByLabelText</h1>
                <label htmlFor="user-name">UserName</label>
                <input type="text" id="user-name"/>
                <br/>
                <br/>
                <label htmlFor="CheckBox">Skills</label>
                <input type="checkbox" id="CheckBox" defaultChecked={true}/>
            </div>
        </>
    )
}
export default App;