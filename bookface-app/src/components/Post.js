import "../components/Post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import  Users  from "../img/logo.png";
// import  logo  from "../img/home1.jpg";
import { Users } from "./Datas";
import FavoriteIcon from '@mui/icons-material/Favorite';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useState } from "react";

/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

// import Avatar from '@mui/material/Avatar';

const base = css`
  @media (min-width: 600px) {
    width: 600px;
  }
`

export default function Post({ post }) {
  console.log(post);
  return (
    <div className="post" css={css`${base}`}>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src=
              {Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
           {/* <Avatar alt="Travis Howard" src={Users} /> */}

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
           <img  className ='postImg' src={post.photo} alt="" /> 

        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
         <span className="likeIcon">{<FavoriteIcon />}</span> 
         <span className="likeIcon-comments" >{<SmsOutlinedIcon />}</span> 
         <span className="likeIcon-share">{<SendOutlinedIcon />}</span>
          <span className="postLikeCounter"> {post.like}people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}