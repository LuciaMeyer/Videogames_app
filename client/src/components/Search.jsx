import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameByName, showGenresFilter, showNameFilter, showPlatformsFilter, showRatingFilter, showTypeFilter, inputSearch } from "../redux/actions";




export const Search = () => {

    const dispatch = useDispatch();
    const genresFilter = useSelector(state => state.genresFilter);
    const platformsFilter = useSelector(state => state.platformsFilter);
    const typeFilter = useSelector(state => state.typeFilter);
    const nameFilter = useSelector(state => state.nameFilter);
    const ratingFilter = useSelector(state => state.ratingFilter);
    const valueInput = useSelector(state => state.valueInput);

    const handleInputChange = e => {
        dispatch(inputSearch(e.target.value))
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(valueInput.length !== 0) { // sino despacharia la accion de busqueda sin valor
            dispatch(getGameByName(valueInput))
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
                    value={valueInput}
                />
                <input type='submit' value='🔍︎' />
            </form>
        </div>
    )
};