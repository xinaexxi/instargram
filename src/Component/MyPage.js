import React, { useState } from 'react';
import myData from './../data/myData.js'
import MyContent from './MyContent.js';
import $ from "jquery";



function MyPage() {

  let [tab, setTab] = useState(0);


  return (
    <>
      <div className='center'>
        <div className='myContainer'>

          <div className='profile'>
            <div className='profileImg'>
              <img src="https://placeimg.com/200/200/people" alt="프로필 이미지" />
            </div>
            <div className='profileInfo'>
              <div className='myID'>
                <h3>{myData[0].name}</h3>
                <button>프로필 편집</button>
              </div>
              <div className='follower'>
                <ul>
                  <li>게시물 <strong>{myData[0].post.length}</strong></li>
                  <li>팔로워 <strong>{myData[0].follower}</strong></li>
                  <li>팔로우 <strong>{myData[0].follow}</strong></li>
                </ul>
              </div>
              <div className='greeting'>
                <p>{myData[0].greetings}</p>
              </div>
            </div>
          </div>
        </div>


        <nav>
          <ul id='tabMenu'>
            <li onClick={(e) => {
              setTab(0);
              e.target.classList.add('on');
            }}>게시물</li>
            <li onClick={(e) => {
              setTab(1);
              e.target.classList.add('on');
            }}>피드</li>
            <li onClick={(e) => {
              setTab(2);
              e.target.classList.add('on');
            }}>저장됨</li>
          </ul>
        </nav>

        <MyContent tab={tab} myData={myData}></MyContent>
      </div>


    </>
  );
}

export default MyPage;