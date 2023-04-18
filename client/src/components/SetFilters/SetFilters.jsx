import { useDispatch, useSelector } from "react-redux";
import { cleanAllFilters, changeGenresFilter, changeNameOrder, changePlatformsFilter, changeRatingOrder, changeTypeFilter, changeUseFilter, changeReleased } from "../../redux/actions";
import './SetFilters.css'

export const SetFilters = () => {  

    const dispatch = useDispatch();
    const genresFilter = useSelector(state => state.genresFilter);
    const platformsFilter = useSelector(state => state.platformsFilter);
    const typeFilter = useSelector(state => state.typeFilter);
    const nameOrder = useSelector(state => state.nameOrder);
    const ratingOrder = useSelector(state => state.ratingOrder);
    const useFilter = useSelector(state => state.useFilter);
    const released = useSelector(state => state.released);

    if(!genresFilter.length && !platformsFilter.length && !typeFilter.length && !nameOrder.length && !ratingOrder.length && useFilter)  dispatch(changeUseFilter(false))
    
    const handleResetAll = () => {
        dispatch(cleanAllFilters());
        window.scrollTo(0, 0);
    }

    const handleResetGenres = () => {
        if(genresFilter !== '') dispatch(changeGenresFilter(''));
        window.scrollTo(0, 0);
    };

    const handleResetPlatforms = () => {
        if(platformsFilter !== '') dispatch(changePlatformsFilter(''));
        window.scrollTo(0, 0);
    };

    const handleResetType = () => {
        if(typeFilter !== '') dispatch(changeTypeFilter(''));
        window.scrollTo(0, 0);
    };

    const handleResetName = () => {
        if(nameOrder !== '') dispatch(changeNameOrder(''));
        window.scrollTo(0, 0);
    };

    const handleResetRaiting = () => {
        if(ratingOrder !== '') dispatch(changeRatingOrder(''));
        window.scrollTo(0, 0);
    };

    const handleResetReleased = () => {
        if(released !== '') dispatch(changeReleased(''));
        window.scrollTo(0, 0);
    };

    return (
        <>
            <button className="butR" onClick={handleResetAll}>RESET</button>   
            <div className="setDiv">
                <div className="setDiv1">
                    {genresFilter.length !== 0 &&
                        <button className="butF" onClick= {handleResetGenres}>{genresFilter} ✕</button>       
                    }
                    {platformsFilter.length !== 0 &&
                        <button className="butF" onClick= {handleResetPlatforms}>{platformsFilter} ✕</button>                
                    }
                    {typeFilter.length !== 0  &&
                        <button className="butF" onClick={handleResetType}>{typeFilter} ✕</button>                  
                    }
                    {nameOrder.length !== 0 &&
                        <button className="butF" onClick={handleResetName}>{nameOrder} ✕</button>   
                    }
                    {ratingOrder.length !== 0 &&
                        <button className="butF" onClick={handleResetRaiting}>{ratingOrder} ✕</button>
                    }
                    {released.length !== 0 &&
                        <button className="butF" onClick={handleResetReleased}>{released} ✕</button>
                    }
                </div>
            </div>
        </>
    )

};