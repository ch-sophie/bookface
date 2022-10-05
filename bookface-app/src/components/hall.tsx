import * as React from 'react'
import {Link} from 'react-router-dom'
import Header from './header'
import Navigation from './navigation'
import Post from './Post'
import { Datas } from './Datas'
import Users from './Users'
import ShowAccount from './ShowAccount'

/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

const base = css`
    margin-top: 60px;
    display: inline-flex;
    gap: 35px;
`

export default function Hall () {
    return (
        <div css= {{backgroundColor: '#fdfdfd'}}>
            <Header />
            <div css={css`${base}`}>
                <div css={{paddingTop: '15px'}}>{Datas.map((p => (<Post key= {p.id} post={p} />) ))}</div>
                <div css={{paddingTop: '15px', width: 315, height: 600}}>{Users.map((p => (<ShowAccount />)))}</div>
            </div>
        </div>
    )
}