import { useDispatch, useSelector } from "react-redux";
import { showGenresFilter, showNameFilter, showPlatformsFilter, showRatingFilter, showTypeFilter, clearStateByName, inputSearch } from "../redux/actions";

export const SetFilters = () => {

    const dispatch = useDispatch();
    const genresFilter = useSelector(state => state.genresFilter);
    const platformsFilter = useSelector(state => state.platformsFilter);
    const typeFilter = useSelector(state => state.typeFilter);
    const nameFilter = useSelector(state => state.nameFilter);
    const ratingFilter = useSelector(state => state.ratingFilter);
    const gameByName = useSelector(state => state.gameByName);
    const valueInput = useSelector(state => state.valueInput);

    const handleResetAll = () => {
        if(genresFilter !== '') dispatch(showGenresFilter(''));
        if(platformsFilter !== '') dispatch(showPlatformsFilter(''));
        if(typeFilter !== '') dispatch(showTypeFilter(''));
        if(nameFilter !== '') dispatch(showNameFilter(''));
        if(ratingFilter !== '') dispatch(showRatingFilter(''));
    }

    const handleResetGenres = () => {
        if(genresFilter !== '') dispatch(showGenresFilter(''));
    };

    const handleResetPlatforms = () => {
        if(platformsFilter !== '') dispatch(showPlatformsFilter(''));
    };

    const handleResetType = () => {
        if(typeFilter !== '') dispatch(showTypeFilter(''));
    };

    const handleResetName = () => {
        if(nameFilter !== '') dispatch(showNameFilter(''));
    };

    const handleResetRaiting = () => {
        if(ratingFilter !== '') dispatch(showRatingFilter(''));
    };

    const handleResetSearchGame = () => {
        dispatch(clearStateByName([]))
        dispatch(inputSearch(''))
    };

    return (
        <>
            <br />
            <button onClick={handleResetAll}>Reset</button>
            <h5>your research:</h5>
                {
                    gameByName.length !== 0
                    ? <button onClick={handleResetSearchGame}>Video Game: "{valueInput}" x</button>
                    : ''
                }     
                {
                    genresFilter.length !== 0 
                    ? <button onClick= {handleResetGenres}>Genre: {genresFilter} x</button>
                    : ''
                }
                {
                    platformsFilter.length !== 0 
                    ? <button onClick= {handleResetPlatforms}>Platforms: {platformsFilter} x</button>
                    : ''
                }
                {           
                    typeFilter.length !== 0  
                    ? <button onClick={handleResetType}>Type: {typeFilter} x</button>
                    : ''
                }
                {           
                    nameFilter.length !== 0 
                    ? <button onClick={handleResetName}>Name: {nameFilter} x</button>
                    : ''
                }
                {           
                    ratingFilter.length !== 0 
                    ? <button onClick={handleResetRaiting}>Rating: {ratingFilter} x</button>
                    : ''
                }
        </>
    )

};