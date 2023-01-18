import React, { useState } from 'react';
import logo from './../img/logo1.png';
import myData from './../data/myData.js'


function LoginPage({ login, setLogin }) {

  let [inputId, setInputId] = useState('');
  let [inputPw, setInputPw] = useState('');

  return (
    <div className='loginContainer'>
      <div className='login'>
        <div className='logo'>
          <h1><img src={logo} alt="" /></h1>
        </div>

        <div className='inputBox'>
          <input type="text" placeholder='전화번호, 사용자 이름 또는 이메일' onChange={(e) => {
            setInputId(e.target.value);
          }} />
          <input type="text" placeholder='비밀번호' onChange={(e) => {
            setInputPw(e.target.value);
          }} />
          <button onClick={() => {
            if (myData[0].id == inputId && myData[0].pw == inputPw) {
              setLogin(true)
            } else {
              alert('아이디와 비밀번호를 확인해주세요')
            }
          }}>로그인</button>
        </div>

        <div className='lostPw'>
          <p>비밀번호를 잊으셨나요?</p>
        </div>
      </div>

      <div className='join'>
        <p>계정이 없으신가요?</p>
        <span>가입하기</span>
      </div>
    </div>
  );
}

export default LoginPage;