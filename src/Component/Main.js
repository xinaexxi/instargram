import React from 'react';
import Feed from './Feed.js';
import RightMenu from './RightMenu.js';


function Main() {


  return (
    <>
      <div className='mainContainer'>
        <div className='center'>
          <div>
            <Feed></Feed>
            <RightMenu></RightMenu>
          </div>

        </div>
      </div>
    </>
  );
}

export default Main;