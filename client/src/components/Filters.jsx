import { useDispatch, useSelector } from "react-redux";
import { changeGenresFilter, changeTypeFilter, changeNameOrder, changeRatingOrder, resetPage, changePlatformsFilter, changeUseFilter } from "../redux/actions";

export const Filters = () => {

    const dispatch = useDispatch()
    const genres = useSelector(state => state.genres);
    const platforms = useSelector(state => state.platforms);
    const genresFilter = useSelector(state => state.genresFilter);
    const platformsFilter = useSelector(state => state.platformsFilter);
    const typeFilter = useSelector(state => state.typeFilter);
    const nameOrder = useSelector(state => state.nameOrder);
    const ratingOrder = useSelector(state => state.ratingOrder);
    const useFilter = useSelector(state => state.useFilter);

    const handleGenreFilter = e => {
        dispatch(changeGenresFilter(e.target.value));       
        dispatch(resetPage(1));
        if(!useFilter) dispatch(changeUseFilter(true));
    };

    const handlePaltformsFilter = e => {
        dispatch(changePlatformsFilter(e.target.value));        
        dispatch(resetPage(1));
        if(!useFilter) dispatch(changeUseFilter(true));
    }

    const handleTypeFilter = e => {
        dispatch(changeTypeFilter(e.target.value));        
        dispatch(resetPage(1));
        if(!useFilter) dispatch(changeUseFilter(true));
    };

    const handleNameOrder = e => {
        dispatch(changeNameOrder(e.target.value));
        dispatch(changeRatingOrder(''));        
        dispatch(resetPage(1));
        if(!useFilter) dispatch(changeUseFilter(true));
    };

    const handleRatingOrder = e => {
        dispatch(changeRatingOrder(e.target.value));
        dispatch(changeNameOrder(''));             
        dispatch(resetPage(1));
        if(!useFilter) dispatch(changeUseFilter(true)); 
    };

    return (
        <div>
            se
            <div>
                <h5>filter by:</h5>
                <select value= {genresFilter} onChange={handleGenreFilter}>
                    <option value= '' disabled>Genre</option>
                    <option value='all'>All Genres</option>
                    {
                        genres?.map(g => (
                            <option key= {g.id} value={g.name}>{g.name}</option>
                        ))
                    }
                </select>
                <select value= {platformsFilter} onChange={handlePaltformsFilter}>
                    <option value= '' disabled>Platforms</option>
                    <option value='all'>All Platforms</option>
                    {
                        platforms?.map(p => (
                            <option key= {p.id} value={p.name}>{p.name}</option>
                        ))
                    }
                </select>
                <select value= {typeFilter} onChange={handleTypeFilter}>
                    <option value= '' disabled>Type</option>
                    <option value= 'all'>All Types</option>
                    <option value= 'created'>Created</option>
                    <option value= 'existing'>Existing</option>
                </select>
                <h5>order by:</h5>
                <select value= {nameOrder} onChange={handleNameOrder}>
                    <option value= '' disabled>Name</option>
                    <option value= 'asc'>A - Z</option>
                    <option value= 'desc'>Z - A</option>
                </select>
                <select value= {ratingOrder} onChange={handleRatingOrder}>
                    <option value= '' disabled>Rating</option>
                    <option value= 'best rating'>Best Rating</option>
                    <option value= 'worst rating'>Worst Rating</option>
                </select>
            </div>
        </div>
    )
};



