import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import { Filters } from './Filters';
import { SetFilters } from "./SetFilters";

export const Nav = () => {

    return(
        <div>
            <div>
                <Search/>
                <br/>
                <button><Link to='/home'>Home</Link></button>
                <button><Link to='/'>Exit</Link></button>
                <button><Link to ='/create'>Create</Link></button>
                <button><Link to ='/about'>About</Link></button>       
            </div>
            <br/>
                <Filters />
                <SetFilters />
        </div>
    )
};