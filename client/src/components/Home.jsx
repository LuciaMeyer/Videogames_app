import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGames, getGenres } from '../redux/actions';
import { Link } from 'react-router-dom';

import { Card } from './Card';
import { Pagination } from './Pagination';
import { Nav } from './Nav';



export const Home = () => {

    // estado global actions
    const dispatch = useDispatch();
    const allGames = useSelector(state => state.allGames);
    const genres = useSelector(state => state.genres);
    const genresFilter = useSelector(state => state.genresFilter);
    const typeFilter = useSelector(state => state.typeFilter);
    const currentPage = useSelector(state => state.currentPage); 

    
    const gamesPerPage = 15;
    
    // filtro por genero y tipo
    let allGamesCopy = allGames; // si a allgames no lo uso en otro lado no hacer la copia
    if(genresFilter.length !== 0 && genresFilter !== 'All') allGamesCopy = allGamesCopy.filter(g => g.genres.includes(genresFilter))
    console.log(currentPage)
    if(typeFilter === 'Created') allGamesCopy = allGamesCopy.filter(g => typeof g.id === 'string');
    if(typeFilter === 'Existing') allGamesCopy = allGamesCopy.filter(g => typeof g.id === 'number');

    
    // paginado
    const indexLastGame = currentPage * gamesPerPage;
    const indexFirstGame = indexLastGame - gamesPerPage;
    const currentGames = allGamesCopy.slice(indexFirstGame, indexLastGame);



    // mostrar todo
    if(!allGames.length && !genres.length) {
        dispatch(getGames());
        dispatch(getGenres());
    }

    return (
        <div>
            <Nav/>
            <Pagination allGames = {allGames.length} gamesPerPage = {gamesPerPage} />
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

