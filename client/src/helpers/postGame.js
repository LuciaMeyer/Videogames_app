import axios from "axios";

export const postGame = payload => {
    return axios.post('/game', payload)
    .then(res => {
        if (res.status === 201) console.log('Videogame created successfully')
    })
    .catch(err => alert(err.message))
};



