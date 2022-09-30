import React, { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import './style.css'
import Box from '@mui/material/Box';
import setimage from '../img/home1.jpg'
import {Link} from 'react-router-dom'
import { css, jsx } from '@emotion/react'

function New({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.username.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    // <Box sx={{ width: '100%', maxWidth: 500, }}>
<div className="container-search" css={css`${base}`}>
    <div className="search">

      <div className="searchInputs">
      <div><Link  to='/hall'><ArrowBackIcon sx={{fontSize: 40}} /></Link></div>

        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.username} target="_blank">
                <p> <span> <img
            src={require('../img/' +
            value.profilePicture )}
              className="postProfileImg"
              alt=""
            />
        </span>{value.username} </p>

              </a>
            );
          })}
        </div>
      )}
    </div>
    <div className="gallery">
            <img  className='item' src={setimage} alt="" />
            <img  className='item' src={setimage} alt="" />
            <img  className='item' src={setimage} alt="" />
            <img  className='item' src={setimage} alt="" />
            <img  className='item' src={setimage} alt="" />
            <img  className='item' src={setimage} alt="" />
            <img  className='item' src={setimage} alt="" />
            <img  className='item' src={setimage} alt="" />
            <img  className='item' src={setimage} alt="" />
            <img  className='item' src={setimage} alt="" />


           </div>

           </div>
    // </Box>

  );
}

export default New;