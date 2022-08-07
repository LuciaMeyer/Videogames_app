import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav } from './Nav'
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getGenres } from "../redux/actions";



export const Create = () => {

    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);
    const platforms = useSelector(state => state.genres);
    const [input, setInput] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        platforms: [],
        genres: [],
        img: '',
     });

    useEffect(() => {
        if(genres.length === 0) dispatch(getGenres()); // si entraron a Search ya está cargado, si entran a create se carga
    }, [dispatch]);

    return (
        <>
            <Nav />
            <h5>Create</h5>
            <button><Link to='/home'>Back</Link></button>
        </>
    )
};