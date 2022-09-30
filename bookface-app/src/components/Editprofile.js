import React from 'react'
import setimage from './img/home1.jpg'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


const Editprofile = () => {
    return (
        <div >
            <div style={{ display: "flex", justifyContent: "space-around", margin: "18px 0px" }}>
                <div><img src={setimage} alt="" style={{ width: "160px", height: "160px", borderRadius: "80px" }} /> </div>
                <div>
                    <h4>bhama </h4>
                    <p>love travelling</p>
                    <p>reading the books</p>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                        <h5> 40 Followers</h5><span></span>
                        <h5> 40Followers </h5><span></span>
                        <h5> 40 following</h5><span></span>
                    </div>
                </div>

            </div>
            <div style={{ display: "flex", margin: "5px 20px",borderBottom:'1px solid grey',paddingBottom:'10px' }}>
            <Stack direction="row" spacing={6} >
            <Avatar alt="Travis Howard" src={setimage}   sx={{ width: 76, height: 76,}}/>
      <Avatar alt="Travis Howard" src={setimage}   sx={{ width: 76, height: 76 }}/>
      <Avatar alt="Cindy Baker" src={setimage}  sx={{ width: 76, height: 76 }} />
      <Avatar alt="Travis Howard" src={setimage}  sx={{ width: 76, height: 76 }}/>
      <Avatar alt="Cindy Baker" src={setimage}  sx={{ width: 76, height: 76 }}/>
      <Avatar alt="Remy Sharp" src={setimage}   sx={{ width: 76, height: 76 }}/>
      <Avatar alt="Travis Howard" src={setimage}   sx={{ width: 76, height: 76 }}/>
      <Avatar alt="Cindy Baker" src={setimage}  sx={{ width: 76, height: 76 }} />
      <Avatar alt="Travis Howard" src={setimage}  sx={{ width: 76, height: 76 }}/>
      <Avatar alt="Cindy Baker" src={setimage}  sx={{ width: 76, height: 76 }}/>

    </Stack>
    </div>



            <div className="gallery">
            <img  className='item' src={setimage} alt="" />
            <img  className='item' src={setimage} alt="" />
            <img  className='item' src={setimage} alt="" />
            <img  className='item' src={setimage} alt="" />
            <img  className='item' src={setimage} alt="" />
            <img  className='item' src={setimage} alt="" />


           </div>

        </div>
    )
}

export default Editprofile
