import React from "react";
import { Link } from "react-router-dom";


export const Nav = () => {

    return(
        <div>
            <div>
                <br/>
                <button><Link to='/home'>Home</Link></button>
                <button><Link to='/'>Exit</Link></button>
                <button><Link to ='/create'>Create</Link></button>
                <button><Link to ='/about'>About</Link></button>
            </div>
            <hr />
        </div>
    )
};