import { useDispatch, useSelector } from 'react-redux';
import { getGames, getGenres, getPlatforms } from '../redux/actions';
import { Link } from 'react-router-dom';
import { Card } from './Card';
import { Pagination } from './Pagination';
import { NotFound } from './NotFound';
import { SearchBar } from "./SearchBar";
import { Loading } from './Loading'
import { nameASC, nameDES, ratingWORST, ratingBEST } from '../helpers/sort';
import { Filters } from './Filters';
import { Nav } from './Nav';
import { SetFilters } from "./SetFilters";
import './Home.css'

export const Home = () => {

    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.currentPage);
    const allGames = useSelector(state => state.allGames);
    const genres = useSelector(state => state.genres);
    const platforms = useSelector(state => state.platforms);
    const gameByName = useSelector(state => state.gameByName);
    const searchGame = useSelector(state => state.searchGame);
    const useFilter = useSelector(state => state.useFilter)
    const genresFilter = useSelector(state => state.genresFilter);
    const platformsFilter = useSelector(state => state.platformsFilter);
    const typeFilter = useSelector(state => state.typeFilter);
    const nameOrder = useSelector(state => state.nameOrder);
    const ratingOrder = useSelector(state => state.ratingOrder);
    
    // defino qué renderizar seún los filtros
    let games = []  
    searchGame && !gameByName.msg ? games = [...gameByName] : games = [...allGames];

    if(typeFilter === 'created') games = games.filter(g => typeof g.id === 'string');
    if(typeFilter === 'existing') games = games.filter(g => typeof g.id === 'number');       
    if(nameOrder === 'asc' ) games.sort(nameASC);
    if(nameOrder === 'desc') games.sort(nameDES);
    if(ratingOrder === 'worst rating') games.sort(ratingWORST);          
    if(ratingOrder === 'best rating') games.sort(ratingBEST);
    if(genresFilter.length !== 0 && genresFilter !== 'all') games = games.filter(g => g.genres.includes(genresFilter));
    if(platformsFilter.length !== 0 && platformsFilter !== 'all') games = games.filter(g => g.platforms.includes(platformsFilter));
    
    // paginado
    const gamesPerPage = 15;
    const indexLastGame = currentPage * gamesPerPage;
    const indexFirstGame = indexLastGame - gamesPerPage;
    const currentGames = games.slice(indexFirstGame, indexLastGame);

    // me traigo info del back en primer renderizado
    if(!games.length && !genres.length && !platforms.length) {
        dispatch(getGames());
        dispatch(getGenres());
        dispatch(getPlatforms());
    }

    // defino loading
    let loading = false
    if ( !games.length && !useFilter && !searchGame) loading = true;
    if ( !gameByName.msg && !gameByName.length && searchGame ) loading = true;

    // defino notFound
    let notFound = false;
    if(searchGame && gameByName.msg) notFound = true;
    if(games.length === 0 && useFilter) notFound = true;
    
    
    // if (loading) return <Loading />
    return (
        <div className='parent'>

            <div className='navConteiner'>
                <div className='slides'> 
                    { loading ? '' : games.length && !gameByName.msg && <span >{games.length} results</span> }
                </div>
                <div className='filConteiner'>
                    <Nav />
                    <SearchBar />
                    <Filters />
                    <SetFilters />
                </div>
            </div>
                {loading && <Loading />}
                {notFound && <NotFound />}
                {!loading && !!currentGames.length && !notFound &&
            <div className='cardsContain'>      
                  
                {currentGames?.map(e => (
                        <div key={e.id} className='card'>
                            <Link to={'/game/' + e.id }>
                                <Card
                                key= {e.id}
                                name={e.name}
                                img={e.img}
                                rating={e.rating}
                                genres={e.genres}
                                platforms={e.platforms}
                                />
                            </Link>
                        </div>                           
                ))}
            </div>        
            }
            <div className='pagContainer'>
                    { !gameByName.msg && <Pagination games = {games.length} gamesPerPage = {gamesPerPage} />}
            </div>
        </div>
    )
};
