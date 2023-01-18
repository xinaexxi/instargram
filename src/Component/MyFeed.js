import React, { useState } from 'react';
import FeedItem from './FeedItem.js'


function MyFeed({myData}) {

  let myPost = myData[0].post;

  let [feedItem, setFeedItem] = useState(myPost);

  let feedList = feedItem.map((item, i) => { return (<FeedItem key={i} id={i + 1} feedItem={myPost[i]}></FeedItem>) })



  return (
    <>
      <div className='myFeedWrap'>
        {feedList}
      </div>
    </>
  );
}

export default MyFeed;