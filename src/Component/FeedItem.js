import React,{ useState } from 'react';
import myData from './../data/myData.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faBookmark, faHeart as regularHeart, faTrashCan, } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpFromBracket, faEllipsis, faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";


function FeedItem({feedItem , id}) {
  let [like , setLike] = useState(feedItem.likes);
  let [likeSwitch , setLikeSwitch] = useState(false);
  let [comment , setComment] = useState([]);
  let [commentInput , setCommentInput] = useState('');

  let commentList = comment.map((data,i)=>{
    return (
      <div className='commentItem' id={i} key={i}>
        <strong>{comment[i].name}</strong>
        <p>{comment[i].content}</p>
        <button onClick={()=>{
          let copyComment = [...comment];
          copyComment.splice(i,1);
          setComment(copyComment);
        }}><FontAwesomeIcon icon={ faTrashCan } /></button>
      </div>
    )
  });

  return (
    <div className='feedContainer'>
      {/* 사용자 프로필 */}
      <div className='itemHeader'>
        <div className='profile'>
          <div className='profileImg'>
            <img src={feedItem.userImage} alt="피드 이미지" />
          </div>
          <p>{feedItem.name}</p>
        </div>

        <button><FontAwesomeIcon icon={faEllipsis} /></button>
      </div>


      {/* 게시물 이미지 */}
      <div className='itemImg'>
        <img src={feedItem.postImage} alt="" />
      </div>


      {/* 스위치 (좋아요 댓글 공유) */}
      <div className='switch'>
        <div className='leftSwitch'>
          <button className='like'
            onClick={()=>{
              let _likeSwitch = likeSwitch ; 
              let _like = like ; 
              if(_likeSwitch == true){
                _likeSwitch = false;
                _like --;
              } else {
                _likeSwitch = true;
                _like ++;
              };
              setLikeSwitch(_likeSwitch)
              setLike(_like)
            }}
            >
              {
                likeSwitch == false 
                ? <FontAwesomeIcon icon={regularHeart} style={{'fontSize':'20px'}}/> 
                : <FontAwesomeIcon icon={solidHeart} style={{'color':'red','fontSize':'20px'}} />
              } 
            </button>
          <button onClick={()=>{
            document.getElementById("comInput"+id).focus();
          }}><FontAwesomeIcon icon={faComment} style={{'fontSize':'20px'}}/></button>
          <button><FontAwesomeIcon icon={faArrowUpFromBracket} style={{'fontSize':'20px'}}/></button>
        </div>
        <div className='rightSwitch'>
          <button><FontAwesomeIcon icon={faBookmark} style={{'fontSize':'20px'}} /></button>
        </div>
      </div>


      {/* 게시물 내용 */}
      <div className='itemContent'>
        <div className='likeBox'>likes {like}</div>
        <div className='contentBox'>
          <strong>{feedItem.name}</strong>
          <p>{feedItem.content}</p>
        </div>
        <div className='commentBox'>
          {commentList}
        </div>
      </div>


      {/* 게시 날짜 */}
      <div className='postDate'>
        <p>{feedItem.date}</p>
      </div>


      {/* 댓글달기 */}
      <div className='addComment'>
        <input id={"comInput"+id} type="text" placeholder="댓글 달기 ..." onChange={(e)=>{
          setCommentInput(e.target.value);
        }} />
        <button onClick={()=>{
          let copyComment = [...comment];
          copyComment.push({'name': myData[0].name ,'content': commentInput })
          setComment(copyComment);
          document.getElementById('comInput'+id).value = '';
        }}>게시</button>
      </div>

    </div>
  );
}

export default FeedItem;