import * as React from 'react'
import {Link} from 'react-router-dom'
import Header from './header'
import Navigation from './navigation'
import { jsx, css } from '@emotion/react';
import New from './Search/New'
import User from "./Search/BookData.json"


const base = css`
    @media (min-width: 600px) {
        width: 600px;
    }
`
const styleLink = css`
    &:visited {
        text-decoration: none;
        // color: #000;
    }
    @media (min-width: 600px) {
        width: 600px;
    }

`


export default function Floor () {
    return (
        <div>
            {/* <Header /> */}

            <New placeholder="Enter Name..." data={User} />
            <Navigation />

        </div>
    )
}