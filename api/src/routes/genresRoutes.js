const { Router } = require('express');
const { Genre } = require('../db');

const router = Router();

router.get('/', async (req, res, next) => {
    try {     
        const genresFromDb = await Genre.findAll()
        res.send(genresFromDb);
    } catch (err) {
        next(err);
    }
});


module.exports = router;