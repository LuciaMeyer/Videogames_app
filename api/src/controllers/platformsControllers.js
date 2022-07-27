const { Platform } = require('../db');


const insertPlatform = async () => {
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

const getDbPlatforms = async (req, res, next) => {
    try {
        const platformDb = await Platform.findAll()
        res.send(platformDb)
    } catch (err) {
        next(err)
    }
};

module.exports = {
    insertPlatform,
    getDbPlatforms,
}