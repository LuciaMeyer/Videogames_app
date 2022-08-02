import React from 'react';
import { useEffect, useState} from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../redux/actions';
import { Link } from 'react-router-dom';
import { Card } from './Card';
import { Paginado } from './Paginado';

export function Home () {

    // estado global y uso de actions
    const dispatch = useDispatch();
    const allGames = useSelector(state => state.videogames);

    // estados locales
    const [currentPage, setCurrentPage] = useState(1); // página actual arranca en 1
    const [gamesPerPage, setGamesPerPage] = useState(15); // me parece q está al pedo!

    const indexLastGame = currentPage * gamesPerPage;
    const indexFirstGame = indexLastGame - gamesPerPage;
    const currentGames = allGames.slice(indexFirstGame, indexLastGame);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
 
    useEffect(() => {
        dispatch(getGames());
    },[dispatch]);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getGames());
    }

    return (
        <div>
            <Link to = '/jadshjdh'>Crear Videogame</Link>
            <h1>Título de la página</h1>
            <button onClick={handleClick}>1603
            
                volver a cargar los videogames
            </button>
            <div>
                <select>
                    <option value= 'asc'>Ascendente</option>
                    <option value= 'desc'>Descendentes</option>
                </select>
                <select>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                <select>
                    <option value= 'all'>Todos</option>
                    <option value= 'created'>Creados</option>
                    <option value= 'api'>Existentes</option>
                </select>
                <Paginado
                    paginado = {paginado}
                    allGames = {allGames.length}
                    gamesPerPage = {gamesPerPage}
                />
                {
                    currentGames?.map(e => { // array de todos los games: http://localhost:3001/games
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