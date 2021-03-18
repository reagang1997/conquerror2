const router = require("express").Router();
const Champ = require('../models/Championship');

router.post('/api/createChamp', async (req, res) => {
    const champ = req.body;
    console.log(champ);
    const newChamp = await Player.create(champ);
    console.log(newChamp);
    res.send(newChamp);
});

router.get('/api/allChamp', async (req, res) => {
    const allChamp = await Champ.find({});
    res.send(allChamp);
})

router.put('/api/generateDemoChamp', async (req, res) => {

});

module.exports = router;
