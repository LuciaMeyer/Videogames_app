import { useDispatch, useSelector } from "react-redux";
import { changeGenresFilter, changeTypeFilter, changeNameOrder, changeRatingOrder, resetPage, changePlatformsFilter, changeUseFilter, getReleased } from "../../redux/actions";
import './Filter.css'

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
    const released = useSelector(state => state.released);

    const handleGenreFilter = e => {
        e.preventDefault()
        dispatch(changeGenresFilter(e.target.value));       
        dispatch(resetPage(1));
        if(!useFilter) dispatch(changeUseFilter(true));
    };

    const handlePaltformsFilter = e => {
        e.preventDefault()
        dispatch(changePlatformsFilter(e.target.value));        
        dispatch(resetPage(1));
        if(!useFilter) dispatch(changeUseFilter(true));
    }

    const handleTypeFilter = e => {
        e.preventDefault()
        dispatch(changeTypeFilter(e.target.value));        
        dispatch(resetPage(1));
        if(!useFilter) dispatch(changeUseFilter(true));
    };

    const handleNameOrder = e => {
        e.preventDefault()
        dispatch(changeNameOrder(e.target.value));
        dispatch(changeRatingOrder(''));        
        dispatch(resetPage(1));
        if(!useFilter) dispatch(changeUseFilter(true));
    };

    const handleRatingOrder = e => {
        e.preventDefault()
        dispatch(changeRatingOrder(e.target.value));
        dispatch(changeNameOrder(''));            
        dispatch(resetPage(1));
        if(!useFilter) dispatch(changeUseFilter(true)); 
    };

    const handleReleasedOrder = e => {
        e.preventDefault()
        dispatch(getReleased(e.target.value))
        // dispatch(resetPage(1));
    }

    return (
        <div className="filcontainer">
            <div>
                <h5 className="h5">❱❱❱ filter by:</h5>
                <select value= {genresFilter} onChange={handleGenreFilter}>S
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
                <h5 className="h5">❱❱❱ order by:</h5>
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
                
                <select value= {released} onChange={handleReleasedOrder}>
                    <option value= '' disabled>Released</option>
                    <option value= 'best released'>Best Released</option>
                    <option value= 'worst released'>Worst Released</option>
                </select>


            </div>
        </div>
    )
};


