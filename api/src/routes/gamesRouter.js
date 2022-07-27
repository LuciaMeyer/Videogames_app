const { Router } = require('express');
const { getAllGames } = require('../controllers/gamesControllers');
const { Videogame, Genre } = require('../db');

const router = Router();

router.get('/', getAllGames);


module.exports = router;