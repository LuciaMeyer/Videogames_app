import React, { useState, useEffect } from "react";
import { Link, NavLink, useHistory  } from "react-router-dom";
import './Nav.css';

export const Nav = ({ windowWidth }) => {
    
    const history = useHistory();

    const handleSelectChange = e => {
        if(e.target.value != '') history.push(e.target.value);
    };

    return (
        <div className="nav">
            {windowWidth >= 1180 ? 
                <>
                        <span><NavLink to='/home'className="navbut"> Home </NavLink></span>
                        <span><NavLink to ='/create' className="navbut">Create</NavLink></span>
                        <span><NavLink to ='/about' className="navbut">About </NavLink></span>
                        <span><Link to='/'className="navbut"> Exit </Link></span>
                </>
             : 
                <select className="selectNav" onChange={handleSelectChange}>
                    <option value="" className="navbut">MENÚ</option>
                    <option value="/home" className="navbut">HOME</option>
                    <option value="/create" className="navbut">CREATE</option>
                    <option value="/about" className="navbut">ABOUT</option>
                    <option value="/" className="navbut">EXIT</option>
                </select>
            }
        </div>
    );
};
