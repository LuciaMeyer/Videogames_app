

const initialState = {
    videogames: []
}

function reducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_GAMES':
            return {
                ...state,
                videogames: action.payload
            }
        default: return state;                 
    }
};

export default reducer;

