import { useDispatch, useSelector } from 'react-redux';
import { getGames, getGenres } from '../redux/actions';
import { Link } from 'react-router-dom';
import { Card } from './Card';
import { Pagination } from './Pagination';
import { Nav } from './Nav';
import { NotFound } from './NotFound';



export const Home = () => {

    // estado global y actions
    const dispatch = useDispatch();
    let allGames = useSelector(state => state.allGames);
    const genres = useSelector(state => state.genres);
    const genresFilter = useSelector(state => state.genresFilter);
    const typeFilter = useSelector(state => state.typeFilter);
    const nameFilter = useSelector(state => state.nameFilter);
    const ratingFilter = useSelector(state => state.ratingFilter)
    const currentPage = useSelector(state => state.currentPage);

    const gamesPerPage = 15;
    // let allGames = allGames; // por si si a allgames no lo uso en otro lado no hacer la copia
    
    const filterAndOrder  = () => {

        if(genresFilter.length !== 0 && genresFilter !== 'all') allGames = allGames.filter(g => g.genres.includes(genresFilter));

        if(typeFilter === 'created') allGames = allGames.filter(g => typeof g.id === 'string');
        if(typeFilter === 'existing') allGames = allGames.filter(g => typeof g.id === 'number');

        if(nameFilter === 'asc' ) {
            allGames && allGames.sort((a,b) => {
                if(a.name > b.name) return 1;
                if(a.name < b.name) return -1;
                return 0
            })
        }
        if(nameFilter === 'desc') {
            allGames && allGames.sort((a,b) => {
                    if(a.name > b.name) return -1;
                    if(a.name < b.name) return 1;
                    return 0 
            })
        }
        if(ratingFilter === 'worst rating' ) {
            allGames.sort((a,b) => {
                if(a.rating > b.rating) return 1;
                if(a.rating < b.rating) return -1;
                return 0
            })
        }   
        if (ratingFilter === 'best  rating') {
            allGames.sort((a,b) => {
                if(a.rating > b.rating) return -1;
                if(a.rating < b.rating) return 1;
                return 0 
            })
        }
        
        return allGames
    }
    filterAndOrder()
    
    // paginado
    const indexLastGame = currentPage * gamesPerPage;
    const indexFirstGame = indexLastGame - gamesPerPage;
    const currentGames = allGames.slice(indexFirstGame, indexLastGame); // si hay filtros toma el arreglo de los filtros, sino el global

    // mostrar todo
    if(!allGames.length && !genres.length) {
        dispatch(getGames());
        dispatch(getGenres());
    }

    return (
        <div>
            <Nav />
            <Pagination allGames = {allGames.length} gamesPerPage = {gamesPerPage} />
            {
                allGames.length === 0 && <NotFound />
            }
            <div>
                {
                    currentGames?.map(e => { 
                        return (
                            <div key={e.id}>
                                <Link to={'/home/' + e.id }>
                                    <Card
                                    name={e.name}
                                    img={e.img}
                                    rating={e.rating}
                                    genres={e.genres}
                                    />
                                </Link>
                            </div>                           
                        )                       
                    })
                }
            </div>
        </div>
    )
};
