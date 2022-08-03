import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import { useDispatch } from 'react-redux';
import { getGames } from '../redux/actions';
import { Filters } from './Filters';

export const Nav = () => {

const dispatch = useDispatch();


const handleClick = (e) => {
    e.preventDefault();
    dispatch(getGames());
}   
    return(
        <div>
            <div>
                <Search/>
                <button><Link to='/'>Exit</Link></button>
                <button><Link to = '/jadshjdh'>Create</Link></button>          
            </div>
            <div>
                <h5>Filter By</h5>
                <Filters/>
                <button onClick={handleClick}>reset</button>
            </div>
        </div>
    )
};