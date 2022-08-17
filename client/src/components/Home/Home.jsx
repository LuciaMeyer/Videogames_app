import { useDispatch, useSelector } from 'react-redux';
import { getGames, getGenres, getPlatforms } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { Card } from '../Card/Card';
import { Pagination } from '../Pagination/Pagination';
import { NotFound } from '../NotFound/NotFound'
import { SearchBar } from "../SearchBar/SearchBar";
import { Loading } from '../Loading/Loading'
import { nameASC, nameDES, ratingWORST, ratingBEST } from '../../helpers/sort';
import { Filters } from '../Filters/Filters';
import { Nav } from '../Nav/Nav';
import { SetFilters } from "../SetFilters/SetFilters";
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
    const released = useSelector(state => state.released)
    
    // defino qué renderizar seún los filtros
    let games = []  
    searchGame && !gameByName.msg ? games = [...gameByName] : games = [...allGames];

    if(typeFilter === 'created') games = games.filter(g => typeof g.id === 'string');
    if(typeFilter === 'existing') games = games.filter(g => typeof g.id === 'number');       
    if(nameOrder === 'asc' ) games.sort(nameASC);
    if(nameOrder === 'desc') games.sort(nameDES);
    if(ratingOrder === 'worst rating') games.sort(ratingWORST);          
    if(ratingOrder === 'best rating') games.sort(ratingBEST);
    
    if(released === 'worst released"') games.sort(ratingWORST);
    if(released === 'best released') games.sort(ratingBEST);
    
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
    if ( searchGame && !gameByName.msg && !gameByName.length ) loading = true;

    // defino notFound
    let notFound = false;
    if(searchGame && gameByName.msg) notFound = true;
    if(!games.length && useFilter) notFound = true;
    

    return (
        <div className='maincontainer'>
            <div className='navConteiner'>    
                    <Nav />
                    <SearchBar />
                    { loading ? '' : games.length && !gameByName.msg &&
                    <span className='homespan'>✓ {games.length} results</span> }
                    <Filters />
                    <SetFilters />   
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
                                released= {e.released}
                                />
                            </Link>
                        </div>                           
                ))}
            </div>        
            }
            <div className='slides'></div>
            <div className='pagContainer'>
                    { !gameByName.msg && <Pagination games = {games.length} gamesPerPage = {gamesPerPage} />}
            </div>
        </div>
    )
};
