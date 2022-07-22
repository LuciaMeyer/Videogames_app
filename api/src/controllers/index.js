require('dotenv').config();
const { apikey, apiGames, apiGenres } = process.env;
const axios = require('axios');
const { Videogame, Genre, Platform } = require('../db');


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
    let infoApiGames = allPageGames.flat();
    // console.log(infoApiGames); 100 juegos desde 5 páginas de la api
    return infoApiGames; 
};

const getDbGames = async () => {
    return await Videogame.findAll({ include: Genre })
}; 

const getAll = async () => {
    const api = await getApiGames();
    const db = await getDbGames();
    const allInfo = api.concat(db);
    return allInfo;
};

// const getByName = async (req, res) => {
//     const { name } = req.query;
//     const getAllGames = await getAll();
//     let findName = await getAllGames.filter(g => g.name.toLowerCase().includes(name.toLowerCase()));
//     findName.length
//     ? findName
//     : 'The video game with that name was not found'
// };

// función para cargar generos a la db 
const getGenres = async () => { // no hago control de errores, ver!
        const genresApi = (await axios(apiGenres + apikey))
            .data.results.map(ob => {
                return {
                    id: ob.id,
                    nameGenre: ob.name
                }
            });
        await Genre.bulkCreate(genresApi, { ignoreDuplicates: true });
        console.log('genres loaded in the db');      
};

// función para cargar plataformas en la db
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



module.exports = {
    getAll,
    getGenres,
    getPlatform,
    // getByName
}