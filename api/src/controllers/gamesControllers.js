require('dotenv').config();
const { apikey, apiGames } = process.env;
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
                        genres: ob.genres.map(g => g),
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

    try {
        if(name) {
            let gamesByName = await allInfo.filter(g => g.name.toLowerCase().includes(name.toLowerCase()));
            gamesByName.length
            ? res.send(gamesByName) 
            : res.status(404).send('The video game was not found');
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