import * as React from 'react'
import {Link} from 'react-router-dom'
import Header from './header'
import Navigation from './navigation'
import Post from './Post'
import { Datas } from './Datas'

export default function Hall () {   
    return (
        <div>
            <Header />
            {Datas.map((p => (<Post key= {p.id} post={p} />) ))}
            <Navigation />
        </div>
    )
}