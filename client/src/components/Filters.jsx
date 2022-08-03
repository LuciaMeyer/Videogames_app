import { useDispatch, useSelector } from "react-redux";
import { showGenresFilter, showTypeFilter, resetPage } from "../redux/actions";

export const Filters = () => {

    const dispatch = useDispatch()
    const genres = useSelector(state => state.genres);
    
    const handleGenreFilter = e => {
        dispatch(showGenresFilter(e.target.value));
        console.log(e.target.value)
        dispatch(resetPage(1)) 
    };

    const handleTypeFilter = e => {
        dispatch(showTypeFilter(e.target.value))
        console.log(e.target.value)
        dispatch(resetPage(1)) 
    };

    return (
        <div>
            <div>
                <select onChange={handleGenreFilter}>
                    <option value= ''>Genre</option>
                    <option value='All'>All</option>
                    {
                        genres?.map(g => (
                            <option key= {g.id} value={g.name}>{g.name}</option>
                        ))
                    }
                </select>
                <select onChange={handleTypeFilter}>
                    <option value= ''>Type</option>
                    <option value= 'All'>All</option>
                    <option value= 'Created'>Created</option>
                    <option value= 'Existing'>Existing</option>
                </select>
                <select>
                    <option value= 'asc'>A - Z</option>
                    <option value= 'desc'>Z-A</option>
                </select>
            </div>
        </div>
    )
};