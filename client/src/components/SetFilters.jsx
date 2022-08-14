import { useDispatch, useSelector } from "react-redux";
import { cleanAllFilters, changeGenresFilter, changeNameOrder, changePlatformsFilter, changeRatingOrder, changeTypeFilter, cleanStateByName, changeSearchGame, changeUseFilter } from "../redux/actions";

export const SetFilters = ({  button }) => {  

    const dispatch = useDispatch();
    const gameByName = useSelector(state => state.gameByName);
    const searchGame = useSelector(state => state.searchGame);
    const genresFilter = useSelector(state => state.genresFilter);
    const platformsFilter = useSelector(state => state.platformsFilter);
    const typeFilter = useSelector(state => state.typeFilter);
    const nameOrder = useSelector(state => state.nameOrder);
    const ratingOrder = useSelector(state => state.ratingOrder);
    const useFilter = useSelector(state => state.useFilter);

    if(!genresFilter.length && !platformsFilter.length && !typeFilter.length && !nameOrder.length && !ratingOrder.length && useFilter)  dispatch(changeUseFilter(false))

    const handleResetAll = () => {
        dispatch(cleanAllFilters());
    }

    const handleResetGenres = () => {
        if(genresFilter !== '') dispatch(changeGenresFilter(''));
    };

    const handleResetPlatforms = () => {
        if(platformsFilter !== '') dispatch(changePlatformsFilter(''));
    };

    const handleResetType = () => {
        if(typeFilter !== '') dispatch(changeTypeFilter(''));
    };

    const handleResetName = () => {
        if(nameOrder !== '') dispatch(changeNameOrder(''));
    };

    const handleResetRaiting = () => {
        if(ratingOrder !== '') dispatch(changeRatingOrder(''));
    };

    const handleResetSearchGame = () => {
        if(searchGame) dispatch(changeSearchGame(false));
        dispatch(cleanStateByName([]));
    };

    return (
        <>
            <br />          
            <button onClick={handleResetAll}>Reset</button>
            {
                gameByName.length && <button onClick={handleResetSearchGame}>Video Game: "{button}" x</button>
                
            }     
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