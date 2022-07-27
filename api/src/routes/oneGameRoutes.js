const { Router } = require('express');
const { getGameID, postGame } = require('../controllers/oneGameControllers');

const router = Router();

router.get('/:id', getGameID);

router.post('/', postGame);

module.exports = router;