import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Nav.css'



export const Nav = () => {


    return(        
            <div className="nav"> 
                    <span><NavLink to='/home'className="navbut"> Home </NavLink></span>
                    <span><NavLink to ='/create' className="navbut">Create</NavLink></span>
                    <span><NavLink to ='/about' className="navbut">About </NavLink></span>
                    <span><Link to='/'className="navbut"> Exit </Link></span>
            </div>
    )
};