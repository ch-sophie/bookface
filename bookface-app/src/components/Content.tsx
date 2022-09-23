import * as React from 'react'
import Post from './Post'
import { Datas } from './Datas'

export default function ShowContent () {
    return (
        Datas.map((p => (<Post key= {p.id} post={p} />) ))
    )
}