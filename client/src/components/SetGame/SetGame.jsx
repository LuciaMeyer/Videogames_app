import React from "react";
import { Link } from "react-router-dom";
import { Nav } from '../Nav/Nav';
// import './About.css'
import './SetGame.css'


export const SetGame = () => {
   

    return (
        <div className='congc1'>
            <div className='contgc2 '><Nav /></div>
            <div className='contgc3'>
                <div className='contgc4'>
                    <div className='imgbackgc1'><img  alt='' /></div>
                    <div className='imgbackgc'><img  alt='' /></div>
                    <Link to='/home'><button className="gcrbut">Back</button></Link>
                </div>
            </div>
            <div className='slidesgc'></div>
            <div className='paggc'></div>
        </div>  
    )
};

