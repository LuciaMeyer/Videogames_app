import { useDispatch, useSelector } from "react-redux";
import { showGenresFilter, showNameFilter, showRatingFilter, showTypeFilter } from "../redux/actions";

export const SetFilters = () => {

    const dispatch = useDispatch();
    const genresFilter = useSelector(state => state.genresFilter);
    const typeFilter = useSelector(state => state.typeFilter);
    const nameFilter = useSelector(state => state.nameFilter);
    const ratingFilter = useSelector(state => state.ratingFilter);


    const handleResetAll = () => {
        if(genresFilter !== '') dispatch(showGenresFilter(''));
        if(typeFilter !== '') dispatch(showTypeFilter(''));
        if(nameFilter !== '') dispatch(showNameFilter(''));
        if(ratingFilter !== '') dispatch(showRatingFilter(0));
    }

    const handleResetGenres = () => {
        if(genresFilter !== '') dispatch(showGenresFilter(''));
    };

    const handleResetType = () => {
        if(typeFilter !== '') dispatch(showTypeFilter(''));
    };

    const handleResetName = () => {
        if(nameFilter !== '') dispatch(showNameFilter(''));
    };

    const handleResetRaiting = () => {
        if(ratingFilter !== '') dispatch(showRatingFilter(0));
    };


    return (
        <>
            <button onClick={handleResetAll}>Reset</button>
            <h5>Filters:</h5>
            {
                genresFilter.length !== 0 
                ? <button onClick= {handleResetGenres}>Genre: {genresFilter} x</button>
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
                ratingFilter !== 0 
                ? <button onClick={handleResetRaiting}>Rating: {ratingFilter} x</button>
                : ''
            }     
        </>
    )


};