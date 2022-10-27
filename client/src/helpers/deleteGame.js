import axios from "axios";

// export const deleteGame = id => {
//     return axios.delete('/game/' + id + '/delete')
//     .then(res => {
//         if (res.status === 201) alert('Videogame deleted successfully')
//     })
//     .catch(err => alert(err.message))
// };

export const deleteGame = async id => {
    try {
        const res = await axios.delete('/game/' + id + '/delete');
        if (res.status === 201)
            console.log('Videogame deleted successfully');
    } catch (err) {
        return alert(err.message);
    }
};