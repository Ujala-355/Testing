import React, { useState } from 'react';

const App = () => {
  const [login, setLogin] = useState(false);

  return (
    <>
      <h1>QueryBy and queryAllBy</h1>
      {login ? <button>Logout</button> : <button>Login</button>}
    </>
  );
};

export default App;
