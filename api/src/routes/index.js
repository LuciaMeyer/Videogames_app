const { Router } = require('express');
const { getAll, getGenres } = require('../controllers/index')
const { Genre } = require('../controllers')

const router = Router();


router.get('/', (req, res, next) => {
    try {
        res.send('landing page')
    } catch (err) {
        next(err)
    }
})

// GET /videogames y GET /videogames?name=...
router.get('/videogames', async (req, res, next) => {
    const { name } = req.query;
    const getAllGames = await getAll();
    try {
        if(name) {
            let gamesByName = await getAllGames.filter(n => n.name.toLowerCase().includes(name.toLowerCase()));
            gamesByName.length
            ? res.send(gamesByName)
            : res.status(404).json('The video game with that name was not found');
        } else {
            res.send(getAllGames);
        };        
    } catch (err) {
        next(err);
    }
});

router.get('/videogames/:id', (req, res, next) => {
    const { id } = req.params;
    try {
        res.send('video by id')
    } catch (err) {
        next();
    }
});

router.get('/genres', async (req, res, next) => {
    try {     
        res.send(await Genre.findAll());
    } catch (err) {
        next(err);
    }
});

router.post('/videogames', (req, res, next) => {
    try {
        
    } catch (err) {
        
    }
});

module.exports = router;
