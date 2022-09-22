import * as React from 'react'
import test from '../interfaces/interface'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';


export default function Test (props: test) {
    return (
        <div css={css`
            height: 500px;
            width: 500px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: 2px solid red;
            @media (min-width: 420px) {
                font-size: 50px;
            }
        `}
        >
            <h1 css={{
                position: 'relative',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}
            >
                {props.text}</h1>
        </div>
    )
}