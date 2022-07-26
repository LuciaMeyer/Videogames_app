const { Router } = require('express');
const { getAll } = require('../controllers');
const { Videogame, Genre } = require('../db');

const router = Router();

router.get('/', getAll);

// necesito comprobar el id if(id) ¿? si me pasan /texto entra a la ruta de name
router.get('/:id', async (req, res, next) => { 
    const { id } = req.params;
    const getAllGames = await getAll();
    try {       
        let gamesById = await getAllGames.filter(g => g.id == id); // son == porque en la ruta llega como string
        gamesById.length 
        ? res.send(gamesById)
        : res.status(404).send('the Videogame with that id was not found')
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
      const { name, description, released, rating, platforms_ } = req.body;
      const bodyGenre = req.body.nameGenre;

      let infoGame = await Videogame.create(req.body);
      let infoGenre = await Genre.findAll({ where: { nameGenre: bodyGenre }});
      infoGame.addGenre(infoGenre);
      res.json('Videogame created successfully');   
    } catch (err) {
        next(err);       
    }
});


module.exports = router;