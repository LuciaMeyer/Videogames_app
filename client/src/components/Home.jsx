import { useDispatch, useSelector } from 'react-redux';
import { getGames, getGenres, getPlatforms } from '../redux/actions';
import { Link } from 'react-router-dom';
import { Card } from './Card';
import { Pagination } from './Pagination';
import { NotFound } from './NotFound';
import { Search } from "./Search";
import { Nav } from './Nav';


export const Home = () => {

    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.currentPage);
    const allGames = useSelector(state => state.allGames);
    const genres = useSelector(state => state.genres);
    const platforms = useSelector(state => state.genres);
    const gameByName = useSelector(state => state.gameByName);
    const searchGame = useSelector(state => state.searchGame);
    const genresFilter = useSelector(state => state.genresFilter);
    const platformsFilter = useSelector(state => state.platformsFilter);
    const typeFilter = useSelector(state => state.typeFilter);
    const nameOrder = useSelector(state => state.nameOrder);
    const ratingOrder = useSelector(state => state.ratingOrder);
    
    let games = []
       
    searchGame && !gameByName.msg ? games = gameByName : games = allGames
    
    const filterAndOrder  = () => {

        if(genresFilter.length !== 0 && genresFilter !== 'all') games = games.filter(g => g.genres.includes(genresFilter));
        if(platformsFilter.length !== 0 && platformsFilter !== 'all') games = games.filter(g => g.platforms.includes(platformsFilter));

        if(typeFilter === 'created') games = games.filter(g => typeof g.id === 'string');
        if(typeFilter === 'existing') games = games.filter(g => typeof g.id === 'number');

        if(nameOrder === 'asc' ) {
            games && games.sort((a,b) => {
                if(a.name > b.name) return 1;
                if(a.name < b.name) return -1;
                return 0
            })
        }
        if(nameOrder === 'desc') {
            games && games.sort((a,b) => {
                    if(a.name > b.name) return -1;
                    if(a.name < b.name) return 1;
                    return 0 
            })
        }
        if(ratingOrder === 'worst rating' ) {
            games.sort((a,b) => {
                if(a.rating > b.rating) return 1;
                if(a.rating < b.rating) return -1;
                return 0
            })
        }   
        if (ratingOrder === 'best  rating') {
            games.sort((a,b) => {
                if(a.rating > b.rating) return -1;
                if(a.rating < b.rating) return 1;
                return 0 
            })
        }
        
        return games
    }
    filterAndOrder()

    const gamesPerPage = 15;
    const indexLastGame = currentPage * gamesPerPage;
    const indexFirstGame = indexLastGame - gamesPerPage;
    const currentGames = games.slice(indexFirstGame, indexLastGame);

    if(!games.length && !genres.length && !platforms.length) {
        dispatch(getGames());
        dispatch(getGenres());
        dispatch(getPlatforms());
    }

    return (
        <div>
            <Nav />
            <Search games= {games} />
                { searchGame && gameByName.msg ? <NotFound /> :
                    (
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
                    )       
                }
        { !gameByName.msg && <Pagination games = {games.length} gamesPerPage = {gamesPerPage} />}
        </div>
    )
};
