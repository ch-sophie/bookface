import { useContext, useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Header from './header'
import Navigation from './navigation'
import Post from './Post'
import axios from "axios";

import { Datas } from './Datas'

export default function Hall () {   
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         const res = await axios.get('/posts/632b215b055cc33d9c00d6ac')
    //         console.log(res);
    //     };
    //     fetchPosts();
    // },[])
        
    
    return (
        <div>
            <Header />
            {Datas.map((p => (<Post key= {p.id} post={p} />) ))}
            <Navigation />
        </div>
    )
}