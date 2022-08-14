import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameByName, changeGenresFilter, changeNameOrder, changePlatformsFilter, changeRatingOrder, changeTypeFilter, changeSearchGame, cleanStateByName } from "../redux/actions";


export const SearchBar = () => {

    const dispatch = useDispatch();
    const genresFilter = useSelector(state => state.genresFilter);
    const platformsFilter = useSelector(state => state.platformsFilter);
    const typeFilter = useSelector(state => state.typeFilter);
    const nameOrder = useSelector(state => state.nameOrder);
    const ratingOrder = useSelector(state => state.ratingOrder);
    const gameByName = useSelector(state => state.gameByName);
    const searchGame = useSelector(state => state.searchGame);

    const [input, setInput] = useState('');
    const [button, setButton] = useState('');

    const handleInputChange = e => {
        setInput(e.target.value);
        setButton(e.target.value);
    };

    const cleanFilters = () => {
        if(genresFilter !== '') dispatch(changeGenresFilter(''));
        if(platformsFilter !== '') dispatch(changePlatformsFilter(''));
        if(typeFilter !== '') dispatch(changeTypeFilter(''));
        if(nameOrder !== '') dispatch(changeNameOrder(''));
        if(ratingOrder !== '') dispatch(changeRatingOrder(''));
    }

    const handleSubmit = e => {
        e.preventDefault();
        setInput('');
        if(input) { // sino despacharia la accion de busqueda sin valor
            dispatch(getGameByName(input));
            dispatch(changeSearchGame(true));
            cleanFilters()
        }
    };

    const handleClick = () => {
        setButton('')
        dispatch(cleanStateByName([]))
        dispatch(changeSearchGame(false));
        cleanFilters()
    }

    let disabled = false
    if(!!gameByName.length && searchGame) disabled = true
    return (
        <div>
            {!!button.length && <span>your search:{button}</span>}
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Search'
                    onChange={handleInputChange}
                    value={input}
                    maxLength= '80'
                    disabled = {disabled}
                />
                <input type='submit' value='🔍︎' />
                {disabled && <button onClick={handleClick}>new search</button>}
            </form>
            <hr />
        </div>
    )
};