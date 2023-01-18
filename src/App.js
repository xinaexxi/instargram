import React, { useState } from 'react';
import './App.css';
import LoginPage from './Component/LoginPage.js';
import InstarMain from './Component/InstarMain.js';



function App() {

  let [login, setLogin] = useState(true);

  return (
    <>
    {
      login == false 
      ? <LoginPage login={login} setLogin={setLogin}></LoginPage>
      : <InstarMain setLogin={setLogin}></InstarMain>
    }
    </>
  );
}

export default App;
