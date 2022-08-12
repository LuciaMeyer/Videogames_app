const { Router } = require('express');
const { getGameID, postGame, deleteGame, putGame } = require('../controllers/gameControllers');

const router = Router();

router.get('/:id', getGameID);

router.post('/', postGame);

router.delete('/:id/delete', deleteGame)

router.put("/:id/update", putGame)

module.exports = router;