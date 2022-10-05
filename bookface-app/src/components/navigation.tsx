import * as React from 'react';
import {Link} from 'react-router-dom'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

const base = css`
    position: fixed;
    bottom: 0px;
    width: 90%;
    height: 50px;
    fontSize: 25px;
    background-color: #fff;
    color: #000;
    display: inline-flex;
    justify-content: space-around;
`

const styleLink = css`
    &:visited {
        text-decoration: none;
        color: #000;
    }
`

export default function Navigation () {
    return (
        <div css={css`${base}`}>
            <div><Link css={css`${styleLink}`} to='/floor'><SearchOutlinedIcon sx={{fontSize: 25}} /></Link></div>
            <div><Link css={css`${styleLink}`} to='/hall'><HomeRoundedIcon sx={{fontSize: 25}} /></Link></div>
            <div><Link css={css`${styleLink}`} to='/profile'><AccountCircleOutlinedIcon sx={{fontSize: 25}} /></Link></div>
        </div>
    )
}