import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filters } from './Filters';
import { SetFilters } from "./SetFilters";
import { getGameByName, showGenresFilter, showNameFilter, showPlatformsFilter, showRatingFilter, showTypeFilter, changeSearchGame } from "../redux/actions";


export const Search = () => {

    const dispatch = useDispatch();
    const genresFilter = useSelector(state => state.genresFilter);
    const platformsFilter = useSelector(state => state.platformsFilter);
    const typeFilter = useSelector(state => state.typeFilter);
    const nameFilter = useSelector(state => state.nameFilter);
    const ratingFilter = useSelector(state => state.ratingFilter);

    const [input, setInput] = useState('');
    const [button, setButton] = useState('');

    const handleInputChange = e => {
        setInput(e.target.value);
        setButton(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setInput('');
        if(input) { // sino despacharia la accion de busqueda sin valor
            dispatch(getGameByName(input));
            dispatch(changeSearchGame(true));
            if(genresFilter !== '') dispatch(showGenresFilter(''));
            if(platformsFilter !== '') dispatch(showPlatformsFilter(''));
            if(typeFilter !== '') dispatch(showTypeFilter(''));
            if(nameFilter !== '') dispatch(showNameFilter(''));
            if(ratingFilter !== '') dispatch(showRatingFilter(''));
        }
        console.log('submit sin name')
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Search'
                    onChange={handleInputChange}
                    value={input}
                />
                <input type='submit' value='🔍︎' />
            </form>
            <Filters />
            <SetFilters setInput= {setInput} button={button} />
        </div>
    )
};