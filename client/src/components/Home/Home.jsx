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
    
    // defino qué renderizar según los filtros
    let games = []  
    searchGame && !gameByName.msg ? games = [...gameByName] : games = [...allGames];


    // filtrados
    if(typeFilter === 'Created') games = games.filter(g => typeof g.id === 'string');
    if(typeFilter === 'Existing') games = games.filter(g => typeof g.id === 'number');       
    if(nameOrder === 'A - Zasc' ) games.sort(nameASC);
    if(nameOrder === 'Z - A') games.sort(nameDES);
    if(ratingOrder === 'Worst Rating rating') games.sort(ratingWORST);          
    if(ratingOrder === 'Best Rating') games.sort(ratingBEST);
    if(released === 'Worst Released"') games.sort(ratingWORST);
    if(released === 'Best Released') games.sort(ratingBEST);
    if(genresFilter.length !== 0 && genresFilter !== 'All Genres') games = games.filter(g => g.genres.includes(genresFilter));
    if(platformsFilter.length !== 0 && platformsFilter !== 'All Platforms') games = games.filter(g => g.platforms.includes(platformsFilter));
    
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
        <>
            <div className='sidebar'>    
                <Nav />
                <SearchBar games={games} loading={loading}/>
                <SetFilters />   
                <Filters />
            </div>

            <div className='topbarContain'>
                <div className='topbar'>
                    <span>FIND YOUR FAVORITE VIDEO GAME</span>
                    <span >You can search all available Video Games from our page. Your search can be filtered by genre, platform, and sorted alphabetically yordenar or by rating.</span>
                </div>
                {!gameByName.msg &&
                <div className='pag'>
                    <Pagination games = {games.length} gamesPerPage = {gamesPerPage}/>
                </div>}
            </div>

            {loading && <div className='load-notF'><Loading/></div>}
            {notFound && <div className='load-notF'><NotFound/></div>}
            
            {!loading && !!currentGames.length && !notFound &&
            <div className='maincontainer'>
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
            </div>
            }
            
            <div className='footer'>
               FOOTER
            </div>
        </>
    )
};
