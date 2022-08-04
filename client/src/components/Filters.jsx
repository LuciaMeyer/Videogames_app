import { useDispatch, useSelector } from "react-redux";
import { showGenresFilter, showTypeFilter, showNameFilter, showRatingFilter, resetPage, showPlatformsFilter } from "../redux/actions";

export const Filters = () => {

    const dispatch = useDispatch()
    const genres = useSelector(state => state.genres);
    const platforms = useSelector(state => state.platforms);
    const genresFilter = useSelector(state => state.genresFilter);
    const platformsFilter = useSelector(state => state.platformsFilter);
    const typeFilter = useSelector(state => state.typeFilter);
    const nameFilter = useSelector(state => state.nameFilter);
    const ratingFilter = useSelector(state => state.ratingFilter);
    
    const handleGenreFilter = e => {
        dispatch(showGenresFilter(e.target.value));
        console.log(e.target.value)
        dispatch(resetPage(1)) 
    };

    const handlePaltformsFilter = e => {
        dispatch(showPlatformsFilter(e.target.value));
        console.log(e.target.value)
        dispatch(resetPage(1))
    }

    const handleTypeFilter = e => {
        dispatch(showTypeFilter(e.target.value))
        console.log(e.target.value)
        dispatch(resetPage(1))
    };

    const handleNameFilter = e => {
        dispatch(showNameFilter(e.target.value))
        dispatch(showRatingFilter(''))
        console.log(e.target.value)
        dispatch(resetPage(1)) 
    };

    const handleRatingFilter = e => {
        dispatch(showRatingFilter(e.target.value))
        dispatch(showNameFilter(''))
        console.log(e.target.value)     
        dispatch(resetPage(1)) 
    };

    return (
        <div>
            <div>
                <h5>filter by:</h5>
                <select value= {genresFilter} onChange={handleGenreFilter}>
                    <option value= ''>Genre</option>
                    <option value='all'>All Genres</option>
                    {
                        genres?.map(g => (
                            <option key= {g.id} value={g.name}>{g.name}</option>
                        ))
                    }
                </select>
                <select value= {platformsFilter} onChange={handlePaltformsFilter}>
                    <option value= ''>Platforms</option>
                    <option value='all'>All Platforms</option>
                    {
                        platforms?.map(p => (
                            <option key= {p.id} value={p.name}>{p.name}</option>
                        ))
                    }
                </select>
                <select value= {typeFilter} onChange={handleTypeFilter}>
                    <option value= ''>Type</option>
                    <option value= 'all'>All Types</option>
                    <option value= 'created'>Created</option>
                    <option value= 'existing'>Existing</option>
                </select>
                <h5>order by:</h5>
                <select value= {nameFilter} onChange={handleNameFilter}>
                    <option value= ''>Name</option>
                    <option value= 'asc'>A - Z</option>
                    <option value= 'desc'>Z - A</option>
                </select>
                <select value= {ratingFilter} onChange={handleRatingFilter}>
                    <option value= ''>Rating</option>
                    <option value= 'best  rating'>Best Rating</option>
                    <option value= 'worst rating'>Worst Rating</option>
                </select>
            </div>
        </div>
    )
};



