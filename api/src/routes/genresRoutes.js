const { Router } = require('express');
const { getDbGenres } = require('../controllers/genresControllers');

const router = Router();

router.get('/', getDbGenres);


module.exports = router;