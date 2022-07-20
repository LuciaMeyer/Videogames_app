require('dotenv').config();
const { apikey, apiGames, apiGenres } = process.env;
const axios = require('axios');
const { Videogame, Genre } = require('../db');


const getApiGames = async () => {
    
    let allPageGames = [];
    let numPage = 1;
    
    for (let i = 0; i < 5; i++) {    
        let page = numPage.toString();
        let url = apiGames + apikey +'&page=' + page;
        let eachPageGames = (await axios(url))
            .data.results.map(ob => {
                return {
                    id: ob.id, // desde el front voy a acceder como el nombre de la propiedad
                    name: ob.name,
                    img: ob.background_image,
                    rating: ob.rating,
                    genres: ob.genres.map(g => g)
                }
            });
    numPage++;
    allPageGames.push(eachPageGames);
    }
    let infoApiGames = allPageGames.flat(1);
    console.log(infoApiGames);
    return infoApiGames; // 100 juegos de 5 páginas
};

const getDbGames = async () => {
    return await Videogame.findAll({ include: Genre })
}; 

const getAll = async () => {
    const api = await getApiGames();
    const db = await getDbGames();
    const allInfo = api.concat(db);
    return allInfo;
};

// función para cargar generos a la db y mostrarlos
const getGenres = async () => {
    const genresApi = (await axios(apiGenres + apikey))
        .data.results.map(ob => {
            return {
                id: ob.id,
                name: ob.name
            }
        });
    await Genre.bulkCreate(genresApi, { ignoreDuplicates: true });
    console.log('episodios cargados');
    // return await Genre.findAll()
};


module.exports = {
    getAll,
    getGenres
}