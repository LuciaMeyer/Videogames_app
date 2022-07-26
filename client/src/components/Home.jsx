// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllGames } from '../redux/actions';


export const Home = () => {

    const dispatch = useDispatch();
    const allGames = useSelector(state => state.videogames);

    useEffect(() => {
        dispatch(getAllGames())
    }, [])



    return (
        <div>
            {
                allGames?.map(g => {
                    return (
                        <div key= {g.id} >
                            <h3>{g.name}</h3>
                            <img src= {g.img} alt={g.name}/>
                        </div>
                    )
                })
            }


        </div>
    )
};

