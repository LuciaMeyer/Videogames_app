import React from "react";
import { Link } from "react-router-dom";
import { Nav } from './Nav';


export const About = () => {


    return (
        <>  
            <Nav />
            <h5>About</h5>
            <button><Link to='/home'>Back</Link></button>
        </>
    )
};