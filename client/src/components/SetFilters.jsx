import { useDispatch, useSelector } from "react-redux";
import { getGames, getGenres, getPlatforms, showGenresFilter, showNameFilter, showPlatformsFilter, showRatingFilter, showTypeFilter, clearStateByName, changeSearchGame, resetPage } from "../redux/actions";

export const SetFilters = ({ setInput, button }) => {  

    const dispatch = useDispatch();
    const allGames = useSelector(state => state.allGames);
    const genres = useSelector(state => state.genres);
    const platforms = useSelector(state => state.genres);
    const gameByName = useSelector(state => state.gameByName);
    const searchGame = useSelector(state => state.searchGame);
    const currentPage = useSelector(state => state.currentPage)
    const genresFilter = useSelector(state => state.genresFilter);
    const platformsFilter = useSelector(state => state.platformsFilter);
    const typeFilter = useSelector(state => state.typeFilter);
    const nameFilter = useSelector(state => state.nameFilter);
    const ratingFilter = useSelector(state => state.ratingFilter);

    const handleResetAll = () => {
        if(!allGames.length) dispatch(getGames());
        if(!genres.length0) dispatch(getGenres());
        if(!platforms) dispatch(getPlatforms());
        if(gameByName.length !== 0) dispatch(clearStateByName([]));
        if(searchGame) dispatch(changeSearchGame(false));
        if(currentPage !== 1) dispatch(resetPage(1))
        if(genresFilter !== '') dispatch(showGenresFilter(''));
        if(platformsFilter !== '') dispatch(showPlatformsFilter(''));
        if(typeFilter !== '') dispatch(showTypeFilter(''));
        if(nameFilter !== '') dispatch(showNameFilter(''));
        if(ratingFilter !== '') dispatch(showRatingFilter(''));
        setInput('');
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
        dispatch(clearStateByName([]));
        setInput('');
    };

    return (
        <>
            <br />
            <button onClick={handleResetAll}>Reset</button>
            <h5>your research:</h5>
                {
                    gameByName.length !== 0
                    ? <button onClick={handleResetSearchGame}>Video Game: "{button}" x</button>
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