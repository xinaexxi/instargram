import React, { useState } from 'react';
import FeedItem from './FeedItem.js'
import $ from "jquery";

function MyPost({myData, setPostSwitch,postSwitch}) {

  let [clickedPost, setClickedPost] = useState([]) ;
  let myPost = myData[0].post;

  //게시물 전체보기
  let postList = myPost.map((data,i)=>{
    return (
      <li id={i+1} key={i} onClick={(e)=>{
        //클릭한 게시물 나오게 하기
        setPostSwitch(false);
        clickedPost = [];
        let copyCP = [...clickedPost]
        copyCP.push(myPost[e.target.parentElement.id-1])
        setClickedPost(copyCP);
      }}>
        <img src={myPost[i].postImage} alt=""/>
      </li>
    )
  });

  //클릭한 게시물 하나 보기
  let postOne = clickedPost.map((item, i) => { return (<FeedItem feedItem={clickedPost[i]}></FeedItem>) })
 
  // 게시물 정사각형 만들기 - width값 = height값 주기
  $(()=>{
      let postWidth = $('.myPostWrap ul li').width();
      $('.myPostWrap ul li').height(postWidth);
  })

  //resize
  window.addEventListener('resize', function() {
    let postWidth = $('.myPostWrap ul li').width();
    $('.myPostWrap ul li').height(postWidth);
  }, true);


  return (
    <>
      <div className='myPostWrap'>
        <ul>
          {/* {postList} */}
          {
            postSwitch === true 
            ?
            postList
            :
            postOne
          }
        </ul>
      </div>
    </>
  );
}

export default MyPost;