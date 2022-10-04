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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


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
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  
  
  return (
    // <Box sx={{ width: '100%', maxWidth: 500, }}>
<div className="container-search" >
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
    {/* <div className="gallery-search">
            <img  className='searchitem' src={setimage} alt="" />
            <img  className='searchitem' src={setimage} alt="" />
            <img  className='searchitem' src={setimage} alt="" />
            <img  className='searchitem' src={setimage} alt="" />
            <img  className='searchitem' src={setimage} alt="" />
            <img  className='searchitem' src={setimage} alt="" />
            <img  className='searchitem' src={setimage} alt="" />
            <img  className='searchitem' src={setimage} alt="" />
            <img  className='searchitem' src={setimage} alt="" />
            <img  className='searchitem' src={setimage} alt="" />


           </div> */}
           <ImageList
      sx={{ width: 500, height: 450,margin:'auto'
    }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            // {...srcset(item.img, 121, item.rows, item.cols)}
            src={require('../img/' +
            item.img)}
            alt={item.title}
            loading="lazy"

             /> 
        </ImageListItem>
      ))}
    </ImageList>

           </div>
    // </Box>

  );
}
const itemData = [
  {
    img: 'book15.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'book14.jpg',
    title: 'Burger',
  },
  {
    img: 'book13.jpg',
    title: 'Camera',
  },
  {
    img: 'book12.jpg',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'book11.jpg',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'book16.jpg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'book10.jpg',
    title: 'Basketball',
  },
  {
    img: 'book9.jpg',
    title: 'Fern',
  },
  {
    img: 'book8.jpg',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'book7.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'book6.jpg',
    title: 'Sea star',
  },
  {
    img: 'book5.jpg',
    title: 'Bike',
    cols: 2,
  },
];

export default New;