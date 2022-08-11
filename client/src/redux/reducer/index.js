import { GET_GAMES, GET_GENRES, GENRE_FILTER, TYPE_FILTER, CURRENT_PAGE,
    RESET_PAGE, NAME_ORDER, RATING_ORDER, GET_PLATFORMS, PLATFORMS_FILTER,
    GET_GAME_DETAIL, GET_GAME_BY_NAME, CLEAR_STATE_BY_NAME, SEARCH_GAME, USE_FILTER, GAME_CREATED } from '../actions/actions_types'

const initialState = {  
    currentPage: 1,
    allGames: [],
    genres: [],
    platforms: [],
    gameByName: [],
    searchGame: false,
    useFilter: false,
    gameCreated: false,
    gameDetail: {},
    // filtersAndOrder: {
    //     genres: {fil: false, g: ''},
    //     platforms: {fil: false, p: ''},
    //     type: {fil: false, t:''},
    //     nameOrder: {or:false, n:''},
    //     raiting: {or:false, r:''}
    // },
    genresFilter: '',
    platformsFilter: '',
    typeFilter: '',
    nameOrder:'',
    ratingOrder: ''
}



export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER_AND_ORDER':
            return {
                ...state,
                filtersAndOrder: {...state.filtersAndOrder, genres: {f: true, g: action.payload}}
            }
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
        case GET_GAME_BY_NAME:
            return {
                ...state,
                gameByName: action.payload
            }
        case SEARCH_GAME:
            return {
                ...state,
                searchGame: action.payload
            }
        case USE_FILTER:
            return {
                ...state,
                useFilter: action.payload
            }
        case GET_GAME_DETAIL:
            return {
                ...state,
                gameDetail: action.payload
            }
        case GENRE_FILTER:
            return {
            ...state,
            genresFilter: action.payload
            }
        // case GENRE_FILTER:
        //     return {
        //         ...state,
        //         filtersAndOrder: {...state.filtersAndOrder, genres: {f: true, g: action.payload}}
        //     }
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
        case NAME_ORDER:
            return {
            ...state,
            nameOrder: action.payload
            }
        case RATING_ORDER:
            return {
            ...state,
            ratingOrder: action.payload
            }
        case CLEAR_STATE_BY_NAME:
            return {
            ...state,
            gameByName: action.payload
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
        case GAME_CREATED: 
            return {
                ...state,
                gameCreated: action.payload
            }
        default: return state;                 
    }
};



