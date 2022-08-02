require('dotenv').config();
const { apikey, apiGameID } = process.env;
const axios = require('axios');
const { Videogame, Genre } = require('../db');


const getGameID = async (req, res) => {
     
    const { id } = req.params;
    const urlId = apiGameID + id + '?key=' + apikey;

    if(id.length > 4 ) { // UUID
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
            let gameApi = (await axios(urlId)).data
            if(gameApi.id) {
                game = {
                    id: gameApi.id,
                    name: gameApi.name,
                    img: gameApi.background_image,
                    genres: gameApi.genres.map(g => g.name),
                    description: gameApi.description,
                    released: gameApi.released,
                    rating: gameApi.rating,
                    platforms: gameApi.platforms.map(p => p.platform.name)
                }
            }
            res.send(game);
        } catch (err) {
            res.send('The Videogame with that id was not found');
        }
    }
};

const postGame = async (req, res, next) => {

    let { name, description, released, rating, platforms_, img } = req.body;
    let genres = req.body.genres;
    if(!name || !description || !platforms_ || !genres) return res.status(404).send('Essential data missing');
    try {  
      let infoGame = await Videogame.create(req.body);
      console.log(infoGame.toJSON());
      let infoGenre = await Genre.findAll({ where: { name: genres }}); 
      console.log(infoGenre.map(i=>i.toJSON()))
      infoGame.addGenre(infoGenre);    
      res.status(201).send('Videogame created successfully');   
    } catch (err) {
        next(err);       
    }
};

module.exports = {
    getGameID,
    postGame
};