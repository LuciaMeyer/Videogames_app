import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Nav.css'



export const Nav = () => {


    return(        
            <ul className="nav"> 
                    <li><NavLink to='/home'className="navbut"> Home </NavLink></li>
                    <li><NavLink to ='/create' className="navbut">Create</NavLink></li>
                    <li><NavLink to ='/about' className="navbut">About </NavLink></li>
                    <li><Link to='/'className="navbut"> Exit </Link></li>
            </ul>
    )
};