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
    left: 50%;
    transform: translate(-50%);
    width: 90%;
    height: 50;
    fontSize: 25;
    background-color: #fff;
    color: #000;
    display: inline-flex;
    justify-content: space-around;
    @media (min-width: 600px) {
        width: 600px;
    }
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
            <div><Link css={css`${styleLink}`} to='#'><AccountCircleOutlinedIcon sx={{fontSize: 25}} /></Link></div>
        </div>
    )
}