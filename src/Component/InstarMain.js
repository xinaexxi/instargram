import React, { useState } from 'react';
import Nav from './Nav.js';
import Main from './Main.js';
import MyPage from './MyPage.js';
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'


function InstarMain({ setLogin }) {

  return (
    <>
      <Nav setLogin={setLogin}></Nav>
        <Routes>
          <Route path='/' element={<Main></Main>}></Route>
          <Route path='/myPage' element={<MyPage></MyPage>}></Route>
        </Routes>
    </>
  );
}

export default InstarMain;
