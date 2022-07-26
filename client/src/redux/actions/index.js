import axios from 'axios';
import { GET_GAMES } from './actions_types'


export const getGames = () => {
    return dispatch => axios('http://localhost:3001/videogames')
        .then(res => dispatch({ type: GET_GAMES, payload: res.data }))
};

