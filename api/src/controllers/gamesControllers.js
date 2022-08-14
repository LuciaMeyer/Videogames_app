require('dotenv').config();
const { apikey, apiGames, apiGameByName } = process.env;
const axios = require('axios');
const { Videogame, Genre } = require('../db');
const { Op } = require('sequelize'); 


const getApiGames = async () => {
    
    const url = apiGames + apikey
    try {                         
        let infoApiGames = [];
        let res = await axios(url)

        for (let i = 0; i < 5; i++) {
            infoApiGames = infoApiGames.concat(res.data.results)   
            res = await axios(res.data.next);
        }
        infoApiGames = infoApiGames.map(ob => {
                    return {
                        id: ob.id,
                        name: ob.name,
                        img: ob.background_image,
                        rating: ob.rating,
                        genres: ob.genres.map(g => g.name),
                        platforms: ob.platforms.map(p => p.platform.name)
                    }
                });
        return infoApiGames
    } catch (err) {
        console.log(err.message)
    }
};

const getDbGames = async () => {
    // return await Videogame.findAll({ 
    //     include: {
    //         model: Genre,
    //         attributes: ['name'],
    //         through: { attributes: [] }
    //     }
    // })
    let infoDbGames = await Videogame.findAll({ 
        include: {
            model: Genre,
            attributes: ['name'],
            through: { attributes: [] }
        }
    })
    return infoDbGames = infoDbGames.map(e => ({
        id: e.id, 
        name: e.name, 
        img: e.img, 
        rating: e.rating,
        platforms: e.platforms, 
        genres: e.genres.map(e => e.name)
    }))
};

const getAllGames = async (req, res, next) => {

    const { name } = req.query;
    const api = await getApiGames();
    const db = await getDbGames();
    const allInfo = db.concat(api);   
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
        res.send({ msg: 'not found' });
    }
};


module.exports = { getAllGames }