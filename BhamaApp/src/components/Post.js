import "./Post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import  Users  from "../img/logo.png";
// import  logo  from "./img/home2.jpg";
import axios from "axios";
import { Users } from "./Datas  ";
import FavoriteIcon from '@mui/icons-material/Favorite';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
// import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

// import Avatar from '@mui/material/Avatar';

export default function Post({ post }) {
  console.log(Users);
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER; 
  const {user: currentUser} = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get( `/users?userId=${post.userId}`);
      setUser(res.data);
    }
    fetchUser();
  }, [post.userId]);

  const likeButton = () => {
    try {
      axios.put("/post/" + post._id + "/like", { userId: currentUser._id});
    } catch (err) {}
    setLike(isLiked ? like -1 : like +1);
    setIsLiked(!isLiked);
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
            <img
            src={require('./img/' +
            Users.filter((u) => u.id === post.userId)[0].profilePicture +
            '.png')}
              className="postProfileImg"
              alt=""
            />
            </Link>
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