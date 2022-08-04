import { useDispatch, useSelector } from 'react-redux';
import { getGames, getGenres, getPlatforms } from '../redux/actions';
import { Link } from 'react-router-dom';
import { Card } from './Card';
import { Pagination } from './Pagination';
import { Nav } from './Nav';
import { NotFound } from './NotFound';


export const Home = () => {

    const dispatch = useDispatch();
    let allGames = useSelector(state => state.allGames);
    const genres = useSelector(state => state.genres);
    const platforms = useSelector(state => state.genres);
    const gameByName = useSelector(state => state.gameByName);
    const genresFilter = useSelector(state => state.genresFilter);
    const platformsFilter = useSelector(state => state.platformsFilter);
    const typeFilter = useSelector(state => state.typeFilter);
    const nameFilter = useSelector(state => state.nameFilter);
    const ratingFilter = useSelector(state => state.ratingFilter);
    const currentPage = useSelector(state => state.currentPage);
    

    const gamesPerPage = 15;
       
    if(gameByName.length !== 0) allGames = gameByName // ojo...si no lo encuentra rompe

    const filterAndOrder  = () => {

        if(genresFilter.length !== 0 && genresFilter !== 'all') allGames = allGames.filter(g => g.genres.includes(genresFilter));
        if(platformsFilter.length !== 0 && platformsFilter !== 'all') allGames = allGames.filter(g => g.platforms.includes(platformsFilter));

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
    if(!allGames.length && !genres.length && !platforms.length) {
        dispatch(getGames());
        dispatch(getGenres());
        dispatch(getPlatforms());
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
            </div>
        </div>
    )
};
