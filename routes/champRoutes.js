const router = require("express").Router();
const Champ = require('../models/Championship');

router.put('/api/addAdmin/:adminID/xxxxxxxxxxxxxxxxxxxxxxxx', async (req, res) => {
    const adminID = req.params.adminID;

    console.log('admin:', adminID);

    const updated = await Champ.findOneAndUpdate({ champName: "xxxxxxxxxxxxxxxxxxxxxxxx" }, { $push: { admin: adminID } }, { new: true });

    console.log(updated);

    res.send(updated);

})

router.get('/api/champs/:champName', async (req, res) => {
    const foundChamps = await Champ.find({champName: {$regex: req.params.champName}})
    res.send(foundChamps);
    
})

router.post('/api/createChamp', async (req, res) => {
    const champ = req.body;
    console.log(champ);
    const newChamp = await Champ.create(champ);
    console.log(newChamp);
    res.send(newChamp);
});


router.put('/api/updateChampName', async (req, res) => {
    let name = req.body;
    name = name.name;
    const updated = await Champ.findOneAndUpdate({ champName: 'xxxxxxxxxxxxxxxxxxxxxxxx' }, { $set: { champName: name } }, { new: true });
    res.send(updated);
})


router.get('/api/allChamp', async (req, res) => {
    const allChamp = await Champ.find({});
    res.send(allChamp);
})

router.get('/api/tmpChamp', async (req, res) => {
    console.log('hit tmpChamp');
    const tmpChamp = await Champ.findOne({ champName: 'xxxxxxxxxxxxxxxxxxxxxxxx' });
    res.send(tmpChamp);
})

router.get('/api/champ/:champID', async (req, res) => {
    const foundChamp = await Champ.findOne({ _id: req.params.champID }).populate('players');
    res.send(foundChamp);

})

router.get('/api/champPlayers/:champId', async (req, res) => {
    const tmpPlayers = await Champ.findOne({_id: req.params.champId}).populate('players');
    res.send(tmpPlayers);
})

router.get('/api/champStats/:champID', async (req, res) => {
    console.log(req.params.champID);
    const stats = await Champ.findOne({_id: req.params.champID}).populate('stats');
    res.send(stats);
})

router.get('/api/champTeams/:champID', async (req, res) => {
    console.log(req.params.champID);
    const players = await Champ.findOne({_id: req.params.champID}).populate('teams');
    res.send(players);
})

router.put('/api/champ/updateKeyStat/:statName/:champID', async (req, res) => {
    const updated = await Champ.findOneAndUpdate({_id: req.params.champID}, {$set: {keyStat: req.params.statName}});
    res.send(updated);
})

router.put('/api/champ/updateKeyStatValue/:value/:champID', async (req, res) => {
    const updated = await Champ.findOneAndUpdate({_id: req.params.champID}, {$set: {keyStatValue: req.params.value}})
    res.send(updated);
})


router.get('/api/oneChamp/:champName', async (req, res) => {
    const foundChamp = await Champ.findOne({champName: req.params.champName});
    res.send(foundChamp);
})

router.put('/api/generateDemoChamp', async (req, res) => {

});

module.exports = router;
