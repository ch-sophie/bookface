import "../components/Post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "./Datas";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";
// import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

// import Avatar from '@mui/material/Avatar';

const base = css`
  @media (min-width: 470px) {
    width: 470px;
  }
`

export default function Post({ post }) {
  console.log(post);
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeButton =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post" css={css`${base}`}>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
          <img
            src={require('./img/' +
            Users.filter((u) => u.id === post.userId)[0].profilePicture +
            '.jpg')}
              className="postProfileImg"
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">
              {post.date}
              </span>
          </div>
        </div>
        <div className="postCenter">
           <span className="postText">{post?.desc}</span> 
           <br />
           <br />
           <img  className ='postImg' 
           src={require('./img/' +
           post.photo)}
           alt="" /> 
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
         <span className="likeIcon" onClick={likeButton} >{<FavoriteIcon />}</span> 
         {/* <span className="likeIcon-comments" >{<ChatBubbleOutlineOutlinedIcon />}</span>  */}
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> {like}  people like it</span>

          </div>
        </div>
      </div>
    </div>
  );
}