require('dotenv').config();
const { apikey, apiGames, apiGenres } = process.env;
const axios = require('axios');
const { Videogame, Genre, Platform } = require('../db');


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
                        genres: ob.genres.map(g => g)
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

const getAll = async (req, res, next) => {
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

// cargar generos en la db 
const getApiGenres = async (req, res, next) => { 
    try {
        const genresApi = (await axios(apiGenres + apikey))
        .data.results.map(ob => {
            return {
                id: ob.id,
                nameGenre: ob.name
            }
        });
    await Genre.bulkCreate(genresApi, { ignoreDuplicates: true });
    console.log('genres loaded in the db'); 
    } catch (err) {
        next(err)
    }     
};

// buscar genres en la db
const getDbGenres = async (req, res, next) => {
    try {
        const genresDb = await Genre.findAll()
        res.send(genresDb)
    } catch (err) {
        next(err)
    }
}

// cargar platforms en la db
const getPlatform = async () => {
    const typeOfPlatforms = [
        {namePlatform: 'Dreamcast'},
        {namePlatform: 'iOS'},
        {namePlatform: 'Linux'},
        {namePlatform: 'macOS'},
        {namePlatform: 'Nintendo 3DS'},
        {namePlatform: 'Nintendo Switch'},
        {namePlatform: 'PC'},
        {namePlatform: 'PlayStation 2'},
        {namePlatform: 'PlayStation 3'},
        {namePlatform: 'PlayStation 4'},
        {namePlatform: 'PlayStation 5'},
        {namePlatform: 'PS Vita'},
        {namePlatform: 'Web'},
        {namePlatform: 'Wii U'},
        {namePlatform: 'Xbox'},
        {namePlatform: 'Xbox 360'},
        {namePlatform: 'Xbox One'},
        {namePlatform: 'Xbox Series S/X'}
    ]
    await Platform.bulkCreate(typeOfPlatforms);
    console.log('platform loaded in the db');  
};

// buscar platforms en la db
const getDbPlatforms = async (req, res, next) => {
    try {
        const platformDb = await Platform.findAll()
        res.send(platformDb)
    } catch (err) {
        next(err)
    }
};




module.exports = {
    getAll,
    getApiGenres,
    getPlatform,
    getDbGenres,
    getDbPlatforms
}