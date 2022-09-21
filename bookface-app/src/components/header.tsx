import { Button, Typography } from '@mui/material'
import * as React from 'react'
import {Link} from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';

const base = css`
    position: fixed;
    top: 0px;
    left: 50%;
    transform: translate(-50%);
    width: 90%;
    height: 100;
    fontSize: 25;
    background-color: #fff;
    color: #000;
    display: inline-flex;
    justify-content: space-between;
    font-size: 25px;
    @media (min-width: 600px) {
        width: 600px;
    }
`

const styleLink = css`
    text-decoration: none;
    &:visited {
        color: #000;
`

export default function Header () {
    return (
        <div css={css`${base}`}>
            <div css={css`margin-left: 25px;`}><Link css={css`${styleLink}`} to={'/hall'}><p>Bookface</p></Link></div>
            <div css={css`margin-right: 25px;`}><Link css={css`${styleLink}`} to={'#'}><NotificationsNoneRoundedIcon css={css`position: relative; top: 50%; transform: translateY(-50%);`}/></Link></div>
        </div>
    )
}