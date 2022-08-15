import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'



export const Nav = () => {

    // const dispatch = useDispatch();
    // const genres = useSelector(state => state.genres);
    // const platforms = useSelector(state => state.genres);
    
    // const handleRefresh = () => {
    //     dispatch(getGames());
    //     if(!genres.length) dispatch(getGenres());
    //     if(!platforms.length) dispatch(getPlatforms());
    //     dispatch(cleanAllFilters());
    // }

    return(        
            <div>
                <div>
                    <button><Link to='/home'>Home</Link></button>
                    <button><Link to='/'>Exit</Link></button>
                    <button><Link to ='/create'>Create</Link></button>
                    <button><Link to ='/about'>About</Link></button>
                    {/* <button onClick={handleRefresh}><Link to='/home'>REFRESH</Link></button> */}
                </div>
            </div>
    )
};