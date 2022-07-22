const { Router } = require('express');
const gamesRouter = require('./gamesRouter');
const genresRoutes = require('./genresRoutes');
const { Genre } = require('../db');

const router = Router();

router.use('/videogames', gamesRouter);
router.use('/genres', genresRoutes);


////////  PROVISORIO  /////////////
router.get('/', (req, res, next) => {
    try {
        res.send('landing page')
    } catch (err) {
        next(err)
    }
})


module.exports = router;
