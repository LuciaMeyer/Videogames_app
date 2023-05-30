import { useDispatch, useSelector } from "react-redux";
import { changeGenresFilter, changeTypeFilter, changeNameOrder, changeRatingOrder, resetPage, changePlatformsFilter, changeUseFilter, changeReleased } from "../../redux/actions";
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
        window.scrollTo(0, 0);
    };

    const handlePaltformsFilter = e => {
        e.preventDefault()
        dispatch(changePlatformsFilter(e.target.value));        
        dispatch(resetPage(1));
        if(!useFilter) dispatch(changeUseFilter(true));
        window.scrollTo(0, 0);
    };

    const handleTypeFilter = e => {
        e.preventDefault()
        dispatch(changeTypeFilter(e.target.value));        
        dispatch(resetPage(1));
        if(!useFilter) dispatch(changeUseFilter(true));
        window.scrollTo(0, 0);
    };

    const handleNameOrder = e => {
        e.preventDefault()
        dispatch(changeNameOrder(e.target.value));
        dispatch(changeRatingOrder(''));        
        dispatch(resetPage(1));
        if(!useFilter) dispatch(changeUseFilter(true));
        window.scrollTo(0, 0);
    };

    const handleRatingOrder = e => {
        e.preventDefault()
        dispatch(changeRatingOrder(e.target.value));
        dispatch(changeNameOrder(''));            
        dispatch(resetPage(1));
        if(!useFilter) dispatch(changeUseFilter(true)); 
        window.scrollTo(0, 0);
    };

    const handleReleasedOrder = e => {
        e.preventDefault()
        dispatch(changeReleased(e.target.value));
        dispatch(resetPage(1));
        window.scrollTo(0, 0);
    };

    return (
        <div className="filcontainer">
            <h5 className="h5">❱❱❱ filter by:</h5>
            <select className="select" value= {genresFilter} onChange={handleGenreFilter}>S
                <option value= '' disabled>Genre</option>
                <option value='All Genres'>All Genres</option>
                {
                    genres?.map(g => (
                        <option key= {g.id} value={g.name}>{g.name}</option>
                    ))
                }
            </select>
            <select className="select" value= {platformsFilter} onChange={handlePaltformsFilter}>
                <option value= '' disabled>Platforms</option>
                <option value='All Platforms'>All Platforms</option>
                {
                    platforms?.map(p => (
                        <option key= {p.id} value={p.name}>{p.name}</option>
                    ))
                }
            </select>
            <select className="select" value= {typeFilter} onChange={handleTypeFilter}>
                <option value= '' disabled>Type</option>
                <option value= 'All Types'>All Types</option>
                <option value= 'Created'>Created</option>
                <option value= 'Existing'>Existing</option>
            </select>
            <h5 className="h5">❱❱❱ order by:</h5>
            <select className="select" value= {nameOrder} onChange={handleNameOrder}>
                <option value= '' disabled>Name</option>
                <option value= 'A - Z'>A - Z</option>
                <option value= 'Z - A'>Z - A</option>
            </select>
            <select className="select" value= {ratingOrder} onChange={handleRatingOrder}>
                <option value= '' disabled>Rating</option>
                <option value= 'Best Rating'>Best Rating</option>
                <option value= 'Worst Rating'>Worst Rating</option>
            </select>          
            <select className="select" value= {released} onChange={handleReleasedOrder}>
                <option value= '' disabled>Released</option>
                <option value= 'The newest'>The newest</option>
                <option value= 'The oldest'>The oldest</option>
            </select>
        </div>
    )
};




