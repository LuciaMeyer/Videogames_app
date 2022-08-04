import { GET_GAMES, GET_GENRES, GENRE_FILTER, TYPE_FILTER, CURRENT_PAGE,
    RESET_PAGE, NAME_FILTER, RATING_FILTER, GET_PLATFORMS, PLATFORMS_FILTER } from '../actions/actions_types'

const initialState = {
    allGames: [],
    genres: [],
    platforms: [],
    currentPage: 1,
    genresFilter: '',
    platformsFilter: '',
    typeFilter: '',
    nameFilter:'',
    ratingFilter: 0
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
        case GET_PLATFORMS:
            return {
                ...state,
                platforms: action.payload
            }
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case GENRE_FILTER:
            return {
                ...state,
                genresFilter: action.payload
            }
        case PLATFORMS_FILTER:
            return {
                ...state,
                platformsFilter: action.payload
            }    
        case TYPE_FILTER:
            return {
                ...state,
                typeFilter: action.payload
            }
            case NAME_FILTER:
                return {
                    ...state,
                    nameFilter: action.payload
                }
            case RATING_FILTER:
                return {
                    ...state,
                    ratingFilter: action.payload
                }
            case RESET_PAGE:
                return {
                ...state,
                currentPage: action.payload
            }   

        default: return state;                 
    }
};



