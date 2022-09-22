import React from 'react'
import setimage from '../img/home1.jpg'


const Editprofile = () => {
    return (
        <div >
            <div style={{ display: "flex", justifyContent: "space-around", margin: "18px 0px",borderBottom:'1px solid grey' }}>
                <div><img src={setimage} alt="" style={{ width: "160px", height: "160px", borderRadius: "80px" }} /> </div>
                <div>
                    <h4>bhama </h4>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                        <h5> 40 posts</h5>
                        <h5> 40 Followers</h5>
                        <h5> 40 following</h5>
                    </div>

                </div>

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
        // <div style={{maxWidth:"550px",margin:"0px auto"}}>
        //     <div style={{display:"flex",justifyContent:"space-around", margin:"18px 0px",}}>
        //         <div>
        //         </div>
        //         <div>
        //         </div>


        //     </div>

        // </div>

    )
}

export default Editprofile
