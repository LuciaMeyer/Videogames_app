import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filters } from './Filters';
import { SetFilters } from "./SetFilters";
import { getGameByName, changeGenresFilter, changeNameOrder, changePlatformsFilter, changeRatingOrder, changeTypeFilter, changeSearchGame } from "../redux/actions";


export const Search = () => {

    const dispatch = useDispatch();
    const genresFilter = useSelector(state => state.genresFilter);
    const platformsFilter = useSelector(state => state.platformsFilter);
    const typeFilter = useSelector(state => state.typeFilter);
    const nameOrder = useSelector(state => state.nameOrder);
    const ratingOrder = useSelector(state => state.ratingOrder);

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
            if(genresFilter !== '') dispatch(changeGenresFilter(''));
            if(platformsFilter !== '') dispatch(changePlatformsFilter(''));
            if(typeFilter !== '') dispatch(changeTypeFilter(''));
            if(nameOrder !== '') dispatch(changeNameOrder(''));
            if(ratingOrder !== '') dispatch(changeRatingOrder(''));
        }
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
            <hr />
        </div>
    )
};