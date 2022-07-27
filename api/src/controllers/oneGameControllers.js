require('dotenv').config();
const { apikey, apiGameID } = process.env;
const axios = require('axios');
const { Videogame, Genre } = require('../db');


const getGameID = async (req, res) => {
     
    const { id } = req.params;
    const urlId = apiGameID + id + '?key=' + apikey;

    if(id.length > 4 ) {
        try {
            let gameDb = await Videogame.findOne({where: {id}, include: Genre})
            gameDb
            ? res.send(gameDb)
            : res.send('The Videogame with that id was not found...');            
        } catch (err) {
            res.send('The Videogame with that id was not found...'); 
        }
    } else {
        try {
            let findGameApi = (await axios(urlId)).data
            if(findGameApi.id) {
                game = {
                    id: findGameApi.id,
                    name: findGameApi.name,
                    img: findGameApi.background_image,
                    genres: findGameApi.genres.map(e => e.name),
                    description: findGameApi.description,
                    released: findGameApi.released,
                    rating: findGameApi.rating,
                    platforms: findGameApi.platforms.map(e => e.platform.name)
                }
            }
            res.send(game);
        } catch (err) {
            res.send('The Videogame with that id was not found');
        }
    }
};

const postGame = async (req, res, next) => {
    try {
      const { name, description, released, rating, platforms_ } = req.body;
      const bodyGenre = req.body.nameGenre;

      let infoGame = await Videogame.create(req.body);
      let infoGenre = await Genre.findAll({ where: { nameGenre: bodyGenre }});
      infoGame.addGenre(infoGenre);
      res.json('Videogame created successfully');   
    } catch (err) {
        next(err);       
    }
};

module.exports = {
    getGameID,
    postGame
};