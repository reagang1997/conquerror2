const router = require("express").Router();
const Stat = require('../models/Stat');

router.post('/api/createStat', async (req, res) => {
    const stat = req.body;
    console.log(stat);
    const newStat = await Stat.create(player);
    console.log(newStat);
    res.send(newStat);
});

module.exports = router;
