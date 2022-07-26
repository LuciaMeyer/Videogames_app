const { Router } = require('express');
const gamesRouter = require('./gamesRouter');
const genresRoutes = require('./genresRoutes');
const { Genre } = require('../db');

const router = Router();

router.use('/videogames', gamesRouter);
router.use('/genres', genresRoutes);


module.exports = router;
