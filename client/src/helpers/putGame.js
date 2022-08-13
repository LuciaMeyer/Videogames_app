import axios from "axios";

export const putGame = (id, input) => {
    return axios.put('http://localhost:3001/game/' + id + '/update', input)
    .then(res => {
        if (res.status === 201) alert('Videogame updated successfully')
        if (!input) console.log('VACIO')
    })
    .catch(err => {
        alert(err.message)
        console.log(err.message)
    }) 
};



