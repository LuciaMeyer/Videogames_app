require('dotenv').config();
const { apikey, apiGameID } = process.env;
const axios = require('axios');
const { Videogame, Genre } = require('../db');


const getGameID = async (req, res) => {
     
    const { id } = req.params;
    const urlId = apiGameID + id + '?key=' + apikey;

    if(id.length > 5 ) { 
        try {
            let gameDb = await Videogame.findOne({where: {id}, include: Genre})
            res.send(gameDb)
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

    let { name, released, rating, platforms, img, description, genres} = req.body;
    let str = ''
    description = str.concat('<p>' + description + '<p>') 
    try {  
      let infoGame = await Videogame.create({ name, released, rating, platforms, img, description});
      let infoGenre = await Genre.findAll({ where: { name: genres }}); 
      infoGame.addGenre(infoGenre);
      res.status(201).send('Videogame created successfully');   
    } catch (err) {
        next(err);       
    }
};

const deleteGame = async (req, res, next) => {
    const { id } = req.params;
    try {
        let gameDelete = await Videogame.findByPk(id)
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
        const game = await Videogame.findByPk(id)
        // console.log(game.toJSON())
        const update = await game.update({ name, img, description, released, rating, platforms })
        // console.log(game.toJSON())
        // const gameGenres = await game.getGenres()
        // await game.removeGenres(gameGenres)
        // let arrPromises = genres.map(e => (
        //     Genre.findOne({where: {name: e}})
        //     .then(res => game.addGenre(res))
        // ))
        // await Promise.all(arrPromises)
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