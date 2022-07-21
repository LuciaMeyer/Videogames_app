const { Router } = require('express');
const { getAll, getByName } = require('../controllers');
const { Videogame } = require('../db');

const router = Router();

//GET /videogames y GET /videogames?name=...
router.get('/', async (req, res, next) => {
    const { name } = req.query;
    const getAllGames = await getAll();
    try {
        if(name) {
            let gamesByName = await getAllGames.filter(n => n.name.toLowerCase().includes(name.toLowerCase()));
            gamesByName.length
            ? res.send(gamesByName) 
            : res.status(404).send('The video game with that name was not found');
        } else {
            res.send(getAllGames); 
        };        
    } catch (err) {
        next(err);
    }
});

// router.get('/', async (req, res, next) => {
//     const { name } = req.query;
//     try {
//         if(name) await getByName();
//         else await getAll();       
//     } catch (err) {
//         next(err);
//     }
// });

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    try {
        res.send('video by id')
    } catch (err) {
        next();
    }
});

router.post('/', async (req, res, next) => {
    try {
      const { name, description, released, rating, platforms } = req.body;
      const bodyGenre = req.body.nameGenre;

      let infoGame = await Videogame.create(req.body);
      let infoGenre = await Genre.findAll({ where: { nameGenre: bodyGenre }});
      infoGame.addGenre(infoGenre);
      res.json('Successfully created Videogame ');   
    } catch (err) {
        next(err);       
    }   
});


module.exports = router;