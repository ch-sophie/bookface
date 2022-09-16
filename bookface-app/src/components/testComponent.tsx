import * as React from 'react'
import test from '../interfaces/interface'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';


export default function Test (props: test) {
    return (
        <div css={{
            height: 500,
            width: 500,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: '2px solid red'
        }}
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