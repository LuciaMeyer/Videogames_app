const { Platform } = require('../db');


const insertPlatform = async () => {
    const typeOfPlatforms = [
        {name: 'Dreamcast'},
        {name: 'iOS'},
        {name: 'Linux'},
        {name: 'macOS'},
        {name: 'Nintendo 3DS'},
        {name: 'Nintendo Switch'},
        {name: 'PC'},
        {name: 'PlayStation 2'},
        {name: 'PlayStation 3'},
        {name: 'PlayStation 4'},
        {name: 'PlayStation 5'},
        {name: 'PS Vita'},
        {name: 'Web'},
        {name: 'Wii U'},
        {name: 'Xbox'},
        {name: 'Xbox 360'},
        {name: 'Xbox One'},
        {name: 'Xbox Series S/X'}
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