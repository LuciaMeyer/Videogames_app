import { GET_GAMES, GET_GENRES, GENRE_FILTER, TYPE_FILTER, CURRENT_PAGE, RESET_PAGE } from '../actions/actions_types'

const initialState = {
    allGames: [],
    genres: [],
    genresFilter: '',
    typeFilter: '',
    currentPage: 1
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GAMES:
            return {
                ...state,
                allGames: action.payload
            }
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case GENRE_FILTER:
            return {
                ...state,
                genresFilter: action.payload
            }    
        case TYPE_FILTER:
            return {
                ...state,
                typeFilter: action.payload
            }
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case RESET_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }   

        default: return state;                 
    }
};



