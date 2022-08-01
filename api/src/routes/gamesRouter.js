const { Router } = require('express');
const { getAllGames } = require('../controllers/gamesControllers');

const router = Router();

router.get('/', getAllGames);


module.exports = router;