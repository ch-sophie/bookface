import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Users from './Users'
import {  useState } from "react";
import Table from './Table';
import './style.css'
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom'

const Search = () => {
  const [query, setQuery] = useState("");
    const keys = ["username", "profilePicture"];
    const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <Box sx={{ maxWidth: 500,alignItems:'center' }}>

    <div className="app">
    {/* <div><Link  to='/hall'><ArrowBackIcon sx={{fontSize: 40}} /></Link></div> */}

            <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
          className="search"

          onChange={(e) => setQuery(e.target.value.toLowerCase())}

        />
     {<Table data={search(Users)} />}
     
    </div>
    </div>
    </Box>

  );
}


export default Search
