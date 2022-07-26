import React from 'react';
import { useEffect} from 'react'; // agregar el useState
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../redux/actions';
import { Link } from 'react-router-dom';
import Card from './Card';

export function Home () {

    const dispatch = useDispatch();
    const allGames = useSelector(state => state.videogames);
    
    useEffect(() => {
        dispatch(getGames());
    },[dispatch]);

    function handleClick(e) {
        e.preventDefault();
        dispatch(getGames());
    }

    return (
        <div>
            <Link to = '/jadshjdh'>Crear Videogame</Link>
            <h1>Título de la página</h1>
            <button onClick={e=> {handleClick(e)}}>
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
                {
                    allGames?.map(e => {
                        return (
                            <div key={e.id}>
                                <Link to={'/home/' + e.id }>
                                    <Card
                                    name={e.name}
                                    img={e.img}
                                    rating={e.rating}
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