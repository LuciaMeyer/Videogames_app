import axios from 'axios';
import { GET_GAMES, RELEASED, GET_GENRES, GENRE_FILTER, TYPE_FILTER, CURRENT_PAGE, RESET_PAGE, NAME_ORDER, RATING_ORDER, GET_PLATFORMS, PLATFORMS_FILTER, GET_GAME_DETAIL,GET_GAME_BY_NAME, SEARCH_GAME, USE_FILTER, CLEAN_ALL_FILTERS, CLEAN_DETAIL, GAME_UPDATE } from './actions_types';

export const changeCurrentPage = payload => {
    return dispatch => {
        dispatch({ type: CURRENT_PAGE, payload})
    }
};

export const getGames = () => {
    return dispatch => axios('/games')
    .then(res => dispatch({ type: GET_GAMES, payload: res.data }))
    .catch(err => console.log(err));
};

export const getGenres = () => {
    return dispatch => axios('/genres')
    .then(res => dispatch({ type: GET_GENRES, payload: res.data}))
    .catch(err => console.log(err));  
};

export const getPlatforms = () => {
    return dispatch => axios('/platforms')
    .then(res => dispatch({ type: GET_PLATFORMS, payload: res.data}))
    .catch(err => console.log(err));  
};

export const getGameByName = name => {
    return dispatch => axios(`/games?name=${name}`)
    .then(res => dispatch({ type: GET_GAME_BY_NAME, payload: res.data}))
    .catch(err => console.log(err));
};

export const getGameDetail = id => {
    return dispatch => axios(`/game/${id}`)
    .then(res => dispatch({ type: GET_GAME_DETAIL, payload: res.data}))
    .catch(err => console.log(err));
};

export const changeSearchGame = payload => {
    return dispatch => {
        dispatch({ type: SEARCH_GAME, payload})
    }
};

export const changeUseFilter = payload => {
    return dispatch => {
        dispatch({ type: USE_FILTER, payload })
    }
};

export const changeGenresFilter = payload => {
    return dispatch => {
        dispatch({ type: GENRE_FILTER, payload})
    }
};

export const changePlatformsFilter = payload => {
    return dispatch => {
        dispatch({ type: PLATFORMS_FILTER, payload})
    }
};

export const changeTypeFilter = payload => {
    return dispatch => {
        dispatch({ type: TYPE_FILTER, payload})
    }
};

export const changeNameOrder = payload => {
    return dispatch => {
        dispatch({ type: NAME_ORDER, payload })
    }
};

export const changeRatingOrder = payload => {
    return dispatch => {
        dispatch({ type: RATING_ORDER, payload })
    }
};

export const changeReleased = payload => {
    return dispatch => {
        dispatch({ type: RELEASED, payload })
    }
};

//////////////////////////////////////////////////
export const cleanAllFilters = () => {
    return dispatch => {
        dispatch({ type: CLEAN_ALL_FILTERS })
    }
};

export const resetPage = payload => {
    return dispatch => {
        dispatch({ type: RESET_PAGE, payload})
    }
}

export const cleanGameDetail = payload => {
    return dispatch => {
        dispatch({ type: CLEAN_DETAIL, payload})
    }
};

export const gameUpdate = payload => {
    return dispatch => {
        dispatch({ type: GAME_UPDATE, payload })
    }
};

