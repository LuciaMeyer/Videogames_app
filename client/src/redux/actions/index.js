import axios from 'axios';

export function getGames () {
    return async function(dispatch) {
        var json = await axios('http://localhost:3001/videogames')
        return dispatch({
            type: 'GET_GAMES',
            payload: json.data
        })
    }
};