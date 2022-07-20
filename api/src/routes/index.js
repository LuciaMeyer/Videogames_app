require('dotenv').config();
const { apikey, apiGames, apiGenres } = process.env;
const { Router } = require('express');
const axios = require('axios');
const { Videogame, Genre } = require('../db');
const router = Router();



// controller
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
    return infoApiGames;
};

// controller
const getDbGames = async () => {
    return await Videogame.findAll({ include: Genre })
};

// controller
const getAll = async () => {
    const api = await getApiGames();
    const db = await getDbGames();
    const allInfo = api.concat(db);
    return allInfo;
};

// route Home
router.get('/', async (req, res, next) => {
    try {
        res.send(await home() + 'this is the home')
    } catch (err) {
        next(err)
    }
})

// route /videogames and /videogames?=name...(falta agregar que sean los primeros 15)
router.get('/videogames', async (req, res, next) => {
    const name = req.query.name;
    const getAllGames = await getAll();
    try {
        if(name) {
            let gamesByName = await getAllGames.filter(n => n.name.toLowerCase().includes(name.toLowerCase()));
            gamesByName.length
            ? res.send(gamesByName)
            : res.status(404).json('The video game with that name was not found');
        } else {
            res.send(getAllGames);
        };        
    } catch (err) {
        next(err);
    }
});

// controller
// const getApiGenres = async () => {

// };





router.get('/genres', (req, res, next) => {

});

module.exports = router;
