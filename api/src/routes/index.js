const { Router } = require('express');
const gamesRouter = require('./gamesRouter');
const oneGameRoutes =require('./oneGameRoutes');
const genresRoutes = require('./genresRoutes');
const platformsRoutes = require('./platformsRoutes');


const router = Router();

router.use('/games', gamesRouter);
router.use('/game', oneGameRoutes);
router.use('/genres', genresRoutes);
router.use('/platforms', platformsRoutes );


module.exports = router;
