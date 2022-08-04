import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import { Filters } from './Filters';
import { SetFilters } from "./SetFilters";
import { useDispatch, useSelector } from "react-redux";
import { showGenresFilter, showNameFilter, showPlatformsFilter, showRatingFilter, showTypeFilter, getGames, getGenres, getPlatforms, inputSearch, resetPage } from "../redux/actions";

export const Nav = () => {

    const dispatch = useDispatch();
    const genresFilter = useSelector(state => state.genresFilter);
    const platformsFilter = useSelector(state => state.platformsFilter);
    const typeFilter = useSelector(state => state.typeFilter);
    const nameFilter = useSelector(state => state.nameFilter);
    const ratingFilter = useSelector(state => state.ratingFilter);
    const valueInput = useSelector(state => state.valueInput);

    const handleRefresh = () => {
        if(genresFilter !== '') dispatch(showGenresFilter(''));
        if(platformsFilter !== '') dispatch(showPlatformsFilter(''));
        if(typeFilter !== '') dispatch(showTypeFilter(''));
        if(nameFilter !== '') dispatch(showNameFilter(''));
        if(ratingFilter !== '') dispatch(showRatingFilter(''));
        if(valueInput !== '') dispatch(inputSearch(''))
        dispatch(getGames());
        dispatch(getGenres());
        dispatch(getPlatforms());
        dispatch(resetPage(1))
    };

    return(
        <div>
            <div>
                <h5>VIDEOGAMES</h5>
                <br/>
                <button><Link to='/home'>Home</Link></button>
                <button><Link to='/'>Exit</Link></button>
                <button><Link to ='/create'>Create</Link></button>
                <button><Link to ='/about'>About</Link></button>
                <button onClick={handleRefresh}>Refresh</button>       
            </div>
            <br/>
                <Search/>
                <Filters />
                <SetFilters />
        </div>
    )
};