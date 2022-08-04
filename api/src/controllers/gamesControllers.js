require('dotenv').config();
const { apikey, apiGames, apiGameByName } = process.env;
const axios = require('axios');
const { Videogame, Genre } = require('../db');


const getApiGames = async () => {
        
    try {
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
                        genres: ob.genres.map(g => g.name),
                        platforms: ob.platforms.map(p => p.platform.name)
                    }
                });
        numPage++;
        allPageGames.push(eachPageGames);
        }
        let infoApiGames = allPageGames.flat();
        // console.log(infoApiGames); 100 juegos desde 5 páginas de la api
        return infoApiGames;       
    } catch (err) {
        console.log(err.message)
    }
};

const getDbGames = async () => {
    return await Videogame.findAll({ include: Genre })
}; 

const getAllGames = async (req, res, next) => {
    
    const { name } = req.query;
    const api = await getApiGames();
    const db = await getDbGames();
    const allInfo = api.concat(db);
    const urlSearchName = apiGameByName + name + '&key=' + apikey;

    try {
        if(name) {
            // esta primera opción busca entre los 100 que traigo, la otra opción busca con el endpoint 
            // let gameByName = await allInfo.filter(g => g.name.toLowerCase().includes(name.toLowerCase()));
            // gameByName.length
            // ? res.send(gameByName) 
            // : res.status(404).send('The video game was not found');
        let gameByName = (await axios(urlSearchName))
            .data.results.slice(0,15).map(ob => {
                return {
                    id: ob.id, // desde el front voy a acceder como el nombre de la propiedad
                    name: ob.name,
                    img: ob.background_image,
                    rating: ob.rating,
                    genres: ob.genres.map(g => g.name),
                    platforms: ob.platforms.map(p => p.platform.name)
                }
            });
        gameByName.length
        ? res.send(gameByName) 
        : res.send([]); // ojo acá!! si no lo encuetra rompe
        } else {
            res.send(allInfo); 
        };        
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getApiGames,
    getDbGames,
    getAllGames    
}