import './css/Footer.css';
import locPic from '../assets/location.png'
import { useState } from 'react';

var Footer=()=>{
    var[text,setText]=useState("hi");
    return(
        <div>
            <div className="row" style={{ display: "flex", justifyContent: "flex-end" }}>
       
        <div className="col2">
            <p>contact:+91-9344353918</p>
            <p>Gmail:kaviarasurp.22cse@kognu.edu</p>
            <p>Address:Anthiyur road erode</p>
        </div>
        <div className="col3">
            <img src={locPic} alt="" />
        </div>
        </div>
        <div className='welcome' style={{color:"white",textAlign:"center"}}>copyrights. Onepiece Creations</div>
        </div>
    )
    
}
export default Footer;