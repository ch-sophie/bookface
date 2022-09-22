import "../components/Post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import  Users  from "../img/logo.png";
import  logo  from "./img/home2.jpg";
import { Users } from "./Datas  ";
import FavoriteIcon from '@mui/icons-material/Favorite';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
// import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useState } from "react";

// import Avatar from '@mui/material/Avatar';

export default function Post({ post }) {
  console.log(Users);
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeButton =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            
            <img
            src={require('./img/' +
            Users.filter((u) => u.id === post.userId)[0].profilePicture +
            '.png')}
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
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
           <span className="postText">{post?.desc}</span> 
           <img  className ='postImg' 
           src={require('./img/' +
           post.photo)}
           alt="" /> 

        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
         <span className="likeIcon" onClick={likeButton}>{<FavoriteIcon />}</span> 
          <span className="likeIcon-comments" >{<SmsOutlinedIcon />}</span> 
         {/* <span className="likeIcon-share">{<SendOutlinedIcon />}</span>  */}
          <span className="postLikeCounter"> {like}people like it</span>
          </div>
              {/* <span className="postCommentText">{post.comment} comments</span> */}
        </div>
        <div className="postBottomRight ">

        <div className="postCommentText">
            <input type="text" placeholder="add comment"/>

            </div>
            </div>

      </div>
    </div>
  );
}