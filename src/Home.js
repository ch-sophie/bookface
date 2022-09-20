import React from 'react'
// import {Container,Form,Button,Navbar} from 'react-bootstrap/';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPerson,faSearch,faVideo } from "@fortawesome/free-solid-svg-icons";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Box from '@mui/material/Box';

// import VideocamIcon from '@mui/icons-material/Videocam';


const Home = () => {
  const [value, setValue] = React.useState(0);

  return (  
    <Box sx={{ width: "100%",bottom:0,position:"fixed", bgcolor: '#1769aa'}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction  href="./components/" label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction label="video" icon={<VideocamIcon />} />
        <BottomNavigationAction label="profile" icon={<PersonPinIcon />} />
      </BottomNavigation>
    </Box>

  )
}

export default Home
