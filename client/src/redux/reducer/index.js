const { GET_VIDEOGAMES, GET_GENRES, GET_GAMEDETAIL } = require('../actions/actions_types');

const initialState = {
    videogames: [],
    genres:[],
    gameDetail: {},
  };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
          return {
            ...state,
            videogames: action.payload
          }

        default: return {...state}
    }
};


export default rootReducer;