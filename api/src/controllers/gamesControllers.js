require('dotenv').config();
const { apikey, apiGames, apiGameByName } = process.env;
const axios = require('axios');
const { Videogame, Genre } = require('../db');
const { Op } = require('sequelize'); 


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
    return await Videogame.findAll({ 
        include: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
};

const getAllGames = async (req, res, next) => {
    
    const { name } = req.query;
    const api = await getApiGames();
    const db = await getDbGames();
    const allInfo = api.concat(db);   
    const urlSearchName = apiGameByName + name + '&key=' + apikey;

    try {
        if(name) {
        let getApiByName = (await axios(urlSearchName))
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
        let getDbByName = await Videogame.findAll({
            where: {
                name: { [Op.iLike]: `%${name}%`}
            }, include: Genre })
        
        let gameByName = getApiByName.concat(getDbByName);
        gameByName.length
        ? res.send(gameByName) 
        : res.send({ msg: 'not found' })
        // : res.status(404).send({msg: 'not found'})
        } else {
            res.send(allInfo);
        };        
    } catch (err) {
        next(err);
    }
};


module.exports = { getAllGames }