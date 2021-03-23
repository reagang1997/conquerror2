const router = require("express").Router();
const Player = require('../models/Player');

router.post('/api/createPlayer/:teamID', async (req, res) => {
    const player = req.body;
    console.log(player);
    const newPlayer = await Player.create(player);
    console.log(newPlayer);
    res.send(newPlayer);
});

module.exports = router;
