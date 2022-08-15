import { useDispatch, useSelector } from "react-redux";
import { cleanAllFilters, changeGenresFilter, changeNameOrder, changePlatformsFilter, changeRatingOrder, changeTypeFilter, changeUseFilter } from "../redux/actions";

export const SetFilters = () => {  

    const dispatch = useDispatch();
    const genresFilter = useSelector(state => state.genresFilter);
    const platformsFilter = useSelector(state => state.platformsFilter);
    const typeFilter = useSelector(state => state.typeFilter);
    const nameOrder = useSelector(state => state.nameOrder);
    const ratingOrder = useSelector(state => state.ratingOrder);
    const useFilter = useSelector(state => state.useFilter);

    if(!genresFilter.length && !platformsFilter.length && !typeFilter.length && !nameOrder.length && !ratingOrder.length && useFilter)  dispatch(changeUseFilter(false))
    
    const handleResetAll = e => {
        e.preventDefault()
        dispatch(cleanAllFilters());
    }

    const handleResetGenres = e => {
        e.preventDefault()
        if(genresFilter !== '') dispatch(changeGenresFilter(''));
    };

    const handleResetPlatforms = e => {
        e.preventDefault()
        if(platformsFilter !== '') dispatch(changePlatformsFilter(''));
    };

    const handleResetType = e => {
        e.preventDefault()
        if(typeFilter !== '') dispatch(changeTypeFilter(''));
    };

    const handleResetName = e => {
        e.preventDefault()
        if(nameOrder !== '') dispatch(changeNameOrder(''));
    };

    const handleResetRaiting = () => {
        // e.prevenDefault()
        if(ratingOrder !== '') dispatch(changeRatingOrder(''));
    };

    return (
        <>
            <br />          
            <button onClick={handleResetAll}>Reset</button>   
            {
                genresFilter.length !== 0 && <button onClick= {handleResetGenres}>Genre: {genresFilter} x</button>
                
            }
            {
                platformsFilter.length !== 0 && <button onClick= {handleResetPlatforms}>Platforms: {platformsFilter} x</button>
                
            }
            {           
                typeFilter.length !== 0  && <button onClick={handleResetType}>Type: {typeFilter} x</button>
                
            }
            {           
                nameOrder.length !== 0 && <button onClick={handleResetName}>Name: {nameOrder} x</button>
                
            }
            {           
                ratingOrder.length !== 0 && <button onClick={handleResetRaiting}>Rating: {ratingOrder} x</button>
            }
        </>
    )

};