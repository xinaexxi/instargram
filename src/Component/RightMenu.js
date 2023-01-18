import React from 'react';
import myData from './../data/myData.js'
import profileData from './../data/profileData.js'
import {Link } from 'react-router-dom'



function RightMenu() {

  let recommendList = profileData.map((data, i) => {
    return (
      <div id={i} key={i} className='recommendProfile'>
        <div className='profile'>
          <div className='profileImg'>
            <img src={profileData[i].userImage} alt="" />
          </div>
          <div className='profileText'>
            <strong>{profileData[i].name}</strong>
            <p>{profileData[i].greetings}</p>
          </div>
        </div>
        <button>팔로우</button>
      </div>
    )
  });


  return (
    <>
      <div className='userWrap'>
        <div className='userBox'>
            <Link className='profile' to="/myPage" >
              <div className='profileImg'>
                <img src={myData[0].userImage} alt="사용자 프로필 이미지" />
              </div>
              <div className='profileText'>
                <strong>{myData[0].name}</strong>
                <p>{myData[0].greetings}</p>
              </div>
            </Link>
        </div>

        <div className='recommendBox'>
          <div className='recomHeader'>
            <h4>회원님을 위한 추천</h4>
            <strong>모두보기</strong>
          </div>
          <div className="recommendUser">
            {recommendList}
          </div>

        </div>

        <div className='footerBox'>

        </div>
      </div>
    </>
  );
}

export default RightMenu;