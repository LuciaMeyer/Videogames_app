import axios from 'axios';

const { GET_VIDEOGAMES, GET_GENRES, GET_GAMEDETAIL } = require('./actions_types');

export const getAllGames = () => {
    return (dispatch) => {
        return axios('http://localhost:3001/videogames')
        .then(res => dispatch({ type: GET_VIDEOGAMES, payload: res.data }))
    }
};