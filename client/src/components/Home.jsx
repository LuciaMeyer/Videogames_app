import { useDispatch, useSelector } from 'react-redux';
import { getGames, getGenres, getPlatforms } from '../redux/actions';
import { Link } from 'react-router-dom';
import { Card } from './Card';
import { Pagination } from './Pagination';
import { NotFound } from './NotFound';
import { Search } from "./Search";


export const Home = () => {

    const dispatch = useDispatch();
    const allGames = useSelector(state => state.allGames);
    const genres = useSelector(state => state.genres);
    const platforms = useSelector(state => state.genres);
    const gameByName = useSelector(state => state.gameByName);
    const genresFilter = useSelector(state => state.genresFilter);
    const platformsFilter = useSelector(state => state.platformsFilter);
    const typeFilter = useSelector(state => state.typeFilter);
    const nameFilter = useSelector(state => state.nameFilter);
    const ratingFilter = useSelector(state => state.ratingFilter);
    const currentPage = useSelector(state => state.currentPage);
    const searchGame = useSelector(state => state.searchGame);
    

    let games = []
       
    searchGame ? games = gameByName : games = allGames

    const filterAndOrder  = () => {

        if(genresFilter.length !== 0 && genresFilter !== 'all') games = games.filter(g => g.genres.includes(genresFilter));
        if(platformsFilter.length !== 0 && platformsFilter !== 'all') games = games.filter(g => g.platforms.includes(platformsFilter));

        if(typeFilter === 'created') games = games.filter(g => typeof g.id === 'string');
        if(typeFilter === 'existing') games = games.filter(g => typeof g.id === 'number');

        if(nameFilter === 'asc' ) {
            games && games.sort((a,b) => {
                if(a.name > b.name) return 1;
                if(a.name < b.name) return -1;
                return 0
            })
        }
        if(nameFilter === 'desc') {
            games && games.sort((a,b) => {
                    if(a.name > b.name) return -1;
                    if(a.name < b.name) return 1;
                    return 0 
            })
        }
        if(ratingFilter === 'worst rating' ) {
            games.sort((a,b) => {
                if(a.rating > b.rating) return 1;
                if(a.rating < b.rating) return -1;
                return 0
            })
        }   
        if (ratingFilter === 'best  rating') {
            games.sort((a,b) => {
                if(a.rating > b.rating) return -1;
                if(a.rating < b.rating) return 1;
                return 0 
            })
        }
        
        return games
    }
    filterAndOrder()
    
    // paginado
    const gamesPerPage = 15;
    const indexLastGame = currentPage * gamesPerPage;
    const indexFirstGame = indexLastGame - gamesPerPage;
    const currentGames = games.slice(indexFirstGame, indexLastGame); // si hay filtros toma el arreglo de los filtros, sino el global

    // mostrar todo
    if(!games.length && !genres.length && !platforms.length) {
        dispatch(getGames());
        dispatch(getGenres());
        dispatch(getPlatforms());
    }

    return (
        <div>
            <Search/>
            <hr />
            <Pagination games = {games.length} gamesPerPage = {gamesPerPage} />
            <div>
                {
                    currentGames?.map(e => { 
                        return (
                            <div key={e.id}>
                                <Link to={'/game/' + e.id }>
                                    <Card
                                    name={e.name}
                                    img={e.img}
                                    rating={e.rating}
                                    genres={e.genres}
                                    platforms={e.platforms}
                                    />
                                </Link>
                            </div>                           
                        )                       
                    })
                }
                { searchGame && games.length === 0 && <NotFound /> }
            </div>
        </div>
    )
};
