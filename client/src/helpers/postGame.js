import axios from "axios";

export const postGame = payload => {
    return axios.post('http://localhost:3001/game', payload)
    .then(res => {
        if (res.status === 201) alert('Videogame created successfully')
    })
    .catch(err => alert(err.message))
};



