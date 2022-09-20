import * as React from 'react'
import {Link} from 'react-router-dom'
import Header from './header'
import Navigation from './navigation'

export default function Floor () {
    return (
        <div>
            <Header />
            <h1>Floor</h1>
            <Navigation />
        </div>
    )
}