require('dotenv').config();
const { apikey, apiGameID } = process.env;
const axios = require('axios');
const { Videogame, Genre } = require('../db');


const getGameID = async (req, res) => {
     
    const { id } = req.params;
    const urlId = apiGameID + id + '?key=' + apikey;

    if(id.length > 5 ) { // UUID
        try {
            let gameDb = await Videogame.findOne({where: {id}, include: Genre})
            gameDb
            ? res.send(gameDb)
            : res.send({ msg: 'The Videogame with that id was not found...' });            
        } catch (err) {
            res.send({ msg: 'The Videogame with that id was not found...' }); 
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
            res.send({ msg: 'The Videogame with that id was not found' });
        }
    }
};

const postGame = async (req, res, next) => {

    let { name, description, released, rating, platforms, img } = req.body;
    let genres = req.body.genres;
    if(!name || !description || !platforms || !genres) return res.status(404).send('Essential data missing');

    try {  
      let infoGame = await Videogame.create(req.body);
    //   console.log(infoGame.toJSON());
      let infoGenre = await Genre.findAll({ where: { name: genres }}); 
    //   console.log(infoGenre.map(i=>i.toJSON()))
      infoGame.addGenre(infoGenre);
      res.status(201).send('Videogame created successfully');   
    } catch (err) {
        next(err);       
    }
};

const deleteGame = async (req, res, next) => {
    const { id } = req.params;
    try {
        console.log(id)
        let gameDelete = await Videogame.findByPk(id)
        console.log(gameDelete)
        gameDelete.destroy();
        res.status(201).send("Videogame deleted correctly");
    } catch (err) {
        next(err)
    }
};

const putGame = async (req, res, next) => {
    const {id} = req.params
    let {name, img, description, released, rating, genres, platforms} = req.body
    // console.log(req.body)
    // platforms = platforms.join(", ")

    try {
        const videogame = await Videogame.findByPk(id)
        // console.log(videogame.toJSON())

        await videogame.update({name, img, description, released, rating, platforms })
        // console.log(videogame.toJSON())
        
        const videogameGenres = await videogame.getGenres()
        // await videogame.removeGenres(videogameGenres)
        console.log(videogameGenres.toJSON) // undefined
        let arrPromises = genres.map(e => (
            Genre.findOne({where: {name: e}})
            .then(res => videogame.addGenre(res))
        ))
        await Promise.all(arrPromises)
        res.status(201).send("Videogame updated correctly");
    } catch (error) {
        next(error)
    }
};

module.exports = {
    getGameID,
    postGame, 
    deleteGame,
    putGame
};