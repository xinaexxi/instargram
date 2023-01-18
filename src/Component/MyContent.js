import React, { useState } from 'react';
import MyFeed from './MyFeed.js'
import MyPost from './MyPost.js'



function MyContent({tab,myData}) {

  
  return (
    <div className='contentsContainer'>
      {[<div><MyPost myData={myData}></MyPost></div>,<MyFeed myData={myData}></MyFeed>,<div>끝</div>][tab]}
    </div>
  );
}

export default MyContent;