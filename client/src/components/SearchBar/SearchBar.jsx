import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameByName, changeGenresFilter, changeNameOrder, changePlatformsFilter, changeRatingOrder, changeTypeFilter, changeSearchGame, cleanStateByName } from "../../redux/actions";
import './SearchBar.css'

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
        <form onSubmit={handleSubmit}>
            <div className='serchBar' >
                <input className='inText'
                    type='text'
                    placeholder='Search Game'
                    onChange={handleInputChange}
                    value={input}
                    maxLength= '30'
                    disabled = {disabled}
                    />
                <input className='inSub' type='submit' value='🔍︎' />
                <div className="divserch">
                    {disabled && <button className="but" onClick={handleClick}>new search</button>}
                    {!!button.length && !!gameByName.length && <span className="span">✓ your search: {button}</span>}
                </div>
            </div>
        </form>
    )
};