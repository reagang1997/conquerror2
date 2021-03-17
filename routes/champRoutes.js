const router = require("express").Router();
const Champ = require('../models/Championship');

router.post('/api/createChamp', async (req, res) => {
    const champ = req.body;
    console.log(champ);
    const newChamp = await Player.create(champ);
    console.log(newChamp);
    res.send(newChamp);
});

router.put('/api/generateDemoChamp', async (req, res) => {

});

module.exports = router;
