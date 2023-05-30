import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGameByName, changeGenresFilter, changeNameOrder, changePlatformsFilter, changeRatingOrder, changeTypeFilter, changeSearchGame, changeReleased } from '../../redux/actions';
import './SearchBar.css'
import lupa from '../../img/lupa.svg'

export const SearchBar = ({ games, loading, notFound }) => {

    const dispatch = useDispatch();
    const genresFilter = useSelector(state => state.genresFilter);
    const platformsFilter = useSelector(state => state.platformsFilter);
    const typeFilter = useSelector(state => state.typeFilter);
    const nameOrder = useSelector(state => state.nameOrder);
    const ratingOrder = useSelector(state => state.ratingOrder);
    const gameByName = useSelector(state => state.gameByName);
    const released = useSelector(state => state.released);
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
        if(released !== '') dispatch(changeReleased(''))
    }

    const handleSubmit = e => {
        e.preventDefault();
        setInput('');
        if(input) { // sino despacharia la accion de busqueda sin valor
            dispatch(getGameByName(input));
            dispatch(changeSearchGame(true));
            cleanFilters();
        }
    };

    let disabled = false;
    if (!!loading || !!notFound || gameByName.length) disabled = true;

    return (
        <form onSubmit={handleSubmit}>        
            <div className='serchBar' >
                <input className='inText'
                    type='text'
                    placeholder={!!button.length && !!gameByName.length ? 'Reset for a New Search' :  'Search Game'}
                    onChange={handleInputChange}
                    value={input}
                    maxLength= '30'
                    disabled = {disabled}
                    />
                <button type='submit' className={!!disabled ? 'inSubDes' : 'inSub'}>
                    <img src={lupa} alt='Lupa' className='lupa-icon' />
                </button>
            </div>          
            <div className='results'>
                { loading
                    ? <span className='searchSpan'>✓ looking for results...</span>                   
                    : !!games.length && !gameByName.msg &&
                    <span className='searchSpan'>✓ {games.length} results</span>
                }
                { !!notFound &&
                    <span className='searchSpan'>✓ no results, try again</span>
                }
                { !!button.length && !!gameByName.length &&
                    <span className='searchSpan'>✓ your search: {button}</span>
                }
            </div>
        </form>
    )
};