import axios from 'axios';
import { GET_GAMES, GET_GENRES, GENRE_FILTER, TYPE_FILTER, CURRENT_PAGE, RESET_PAGE } from './actions_types';


export const getGames = () => {
    return dispatch => axios('http://localhost:3001/games')
    .then(res => dispatch({ type: GET_GAMES, payload: res.data }))
    .catch(err => console.log(err));
};

export const getGenres = () => {
    return dispatch => axios('http://localhost:3001/genres')
    .then  (res => dispatch({ type: GET_GENRES, payload: res.data}))
    .catch(err => console.log(err));  
};

export const showGenresFilter = payload => {
    return dispatch => {
        dispatch({ type: GENRE_FILTER, payload})
    }
};

export const showTypeFilter = payload => {
    return dispatch => {
        dispatch({ type: TYPE_FILTER, payload})
    }
};

export const showCurrentPage = payload => {
    return dispatch => {
        dispatch({ type: CURRENT_PAGE, payload})
    }
};

export const resetPage = payload => {
    return dispatch => {
        dispatch({ type: RESET_PAGE, payload})
    }
}
