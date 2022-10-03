import * as React from 'react'
import test from '../interfaces/interface'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import axios from 'axios';
import { Button } from '@mui/material';


export default function Test () {

    const config = {
        baseURL: "http://localhost:3001/",
        header: {
            "Content_type": "application/json"
        }  
    }

    function fetchAxiosGet () {

        axios.get("users/", config)
          .then(result => console.log(result))
          .catch(error => console.log(error));
    }

    function fetchAxiosPost () {

        const data = {
            "firstName": "Flor",
            "lastName": "Pluym",
            "email": "flor.pluym@gmail.com",
            "password": "HelloWorld"
        }

        const configg = {
            baseURL: "http://localhost:3001/",
            header: {
                "Content_type": "application/json"
            },
            data: data,
        }

        axios.post("auth/register", configg)
          .then(result => console.log(result))
          .catch(error => console.log(error));
    }

    

    // axios(config)
    // .then ((res) => {
    //     console.log(res)
    // })
    return (
        <div>
            <Button onClick={fetchAxiosGet}>Get users</Button>
            <Button onClick={fetchAxiosPost}>Get users</Button>
        </div>
    )
}