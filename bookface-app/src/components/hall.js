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
    //         const res =  await axios.get('http://localhost:3001/server/posts/timeline/632c29f072af353e94936d25')
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