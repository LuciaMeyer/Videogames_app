require('dotenv').config();
const { apikey, apiGenres } = process.env;
const axios = require('axios');
const { Genre } = require('../db');


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

const getDbGenres = async (req, res, next) => {
    try {
        const genresDb = await Genre.findAll()
        res.send(genresDb)
    } catch (err) {
        next(err)
    }
}


module.exports = {
    getApiGenres,
    getDbGenres,
}