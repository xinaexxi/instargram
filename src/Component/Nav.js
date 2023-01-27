import React, { useState } from 'react';
import logo from './../img/logo1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faHeart, faUser, faPaperPlane  } from "@fortawesome/free-regular-svg-icons";
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'


function Nav({setLogin}) {

  let [myPage , setMyPage] = useState(false);


  return (
    <div className="navContainer">
      <div className='center'>
        <div className='contents'>
          <h1 className="logo"><Link to="/" ><img src={logo} alt="로고" /></Link></h1>

          <div className="searchBox">
            <input placeholder='검색' />
          </div>

          <div className="rightTop">
            <button><FontAwesomeIcon icon={faSquarePlus} size="lg" color='#555' cursor="pointer"/></button>
            <button><FontAwesomeIcon icon={faHeart} size="lg"  color='#555' cursor="pointer" /></button>
            <button><FontAwesomeIcon icon={faPaperPlane} size="lg"  color='#555' cursor="pointer" /></button>
            <button onClick={()=>{
              myPage == false ? setMyPage(true) : setMyPage(false) ;
            }}><FontAwesomeIcon icon={faUser} size="lg"  color='#555' cursor="pointer" />
            {
              myPage == false
              ? null
              : <ul id='myFeed' className='myFeed'>
                  <li><Link to="/myPage" >my feed</Link>
                  </li>
                  <li><a onClick={()=>{
                    setLogin(false);
                  }}>logout</a></li>
                </ul>
            }
            </button>
          </div>
        </div>

        <div className="navBottom">
            <button><FontAwesomeIcon icon={faHeart} size="2x"  color='#555' cursor="pointer" /></button>
            <button><FontAwesomeIcon icon={faSquarePlus} size="2x" color='#555' cursor="pointer"/></button>
            <button><FontAwesomeIcon icon={faPaperPlane} size="2x"  color='#555' cursor="pointer" /></button>
            <button onClick={()=>{
              myPage == false ? setMyPage(true) : setMyPage(false) ;
            }}><FontAwesomeIcon icon={faUser} size="2x"  color='#555' cursor="pointer" />
            {
              myPage == false
              ? null
              : <ul id='myFeed' className='myFeed'>
                  <li><Link to="/myPage" >my feed</Link>
                  </li>
                  <li><a onClick={()=>{
                    setLogin(false);
                  }}>logout</a></li>
                </ul>
            }
            </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;