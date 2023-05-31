import React from "react";
import  slider1  from '../../img/s1.png'
import  slider2  from '../../img/s2.png'
import  slider3  from '../../img/s3.png'
import  slider4  from '../../img/s4.png'
import './TopBar.css'



export const TopBar = () => {
    return(
        <div className='slider'>
            <ul>
                <li><img  src={slider1} alt="not found"/></li>
                <li><img  src={slider2} alt="not found"/></li>
                <li><img  src={slider3} alt="not found"/></li>
                <li><img  src={slider4} alt="not found"/></li>
            </ul>
        </div>  
    )
};