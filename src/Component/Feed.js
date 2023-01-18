import React, { useState } from 'react';
import feedData from './../data/feedData.js'
import feedData2 from './../data/feedData2.js'
import FeedItem from './FeedItem.js'


function Feed() {

  let [feedItem, setFeedItem] = useState(feedData);
  let [click, setClick] = useState(0);

  let feedList = feedItem.map((item, i) => { return (<FeedItem key={i} id={i + 1} feedItem={feedItem[i]}></FeedItem>) })

  return (
    <>
      <div className='feedWrap'>
        {feedList}

        <div className='viewMore'>
          <button onClick={() => {
            if (click == 0) {
              let copyFeedItem = [...feedItem, ...feedData2];
              setClick(click + 1);
              setFeedItem(copyFeedItem);
            } else {
              alert('새로운 피드가 없습니다')
            }
          }}>더보기</button>
        </div>
        
      </div>
    </>
  );
}

export default Feed;