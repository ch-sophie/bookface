import { Button, Typography } from '@mui/material'
import * as React from 'react'
import {Link} from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import Navigation from './navigation';
import TextField from '@mui/material/TextField'
import {  useState } from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const baseHead = css`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 60px;
    fontSize: 25;
    background-color: #fff;
    color: #000;
    font-size: 25px;
    border-bottom: solid 1px #ddd;
`

const baseNav = css`
    position: fixed;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 60px;
    display: inline-flex;
    justify-content: space-between;
`

const styleLink = css`
    text-decoration: none;
    color: #000;
`

const styleDrop = css`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    height: 30px;
    display: inline-flex;
    justify-content: space-between;
`

const styleSearch = css`
    border-radius: 10px;
    border: none;
    background-color: #eee;
    height: 30px;
    width: 300px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export default function Header () {

    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e: React.ChangeEvent) => {
        e.preventDefault();
        setSearchInput((e.target as HTMLTextAreaElement).value);
      };

    return (
        <div css={css`${baseHead}`}>
            <div css={css`${baseNav}`}>
                <div css={css`${styleDrop}`}><Link css={css`${styleLink}`} to='/hall'>Bookface</Link></div>
                <div css={css`${styleDrop}`}><input css={css`${styleSearch}`} type='text' placeholder='search' onChange={handleChange} value={searchInput} /></div>
                <div css={css`${styleDrop}; width: 100px;`}>
                    <div><Link css={css`${styleLink}`} to='/hall'><HomeRoundedIcon sx={{fontSize: 25}} /></Link></div>
                    <div><Link css={css`${styleLink}`} to='/profile'><AccountCircleOutlinedIcon sx={{fontSize: 25}} /></Link></div>
                </div>
            </div>
        </div>
    )
}