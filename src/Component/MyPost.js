import React, { useState } from 'react';
import FeedItem from './FeedItem.js'


function MyPost({myData}) {

  let myPost = myData[0].post;
  let postList = myPost.map((data,i)=>{
    return (
      <li id={i+1} key={i}>
        <img src={myPost[i].postImage} alt=""/>
      </li>
    )
  })
  return (
    <>
      <div className='myPostWrap'>
        <ul>
        {postList}
        </ul>
      </div>
    </>
  );
}

export default MyPost;