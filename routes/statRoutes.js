const router = require("express").Router();
const Stat = require('../models/Stat');
const Champ = require('../models/Championship');

router.post('/api/createStat/:champID', async (req, res) => {
    let stat = req.body;
    stat = { statName: stat.name };
    console.log(stat);
    const newStat = await Stat.create(stat);

    const updatedChamp = await Champ.findOneAndUpdate({ _id: req.params.champID }, { $push: { stats: newStat._id } }, { new: true });

    console.log(updatedChamp);
    console.log(newStat);
    res.send(newStat);
});

router.get('/api/stats/:statID/:champID', async (req, res) => {
    const deletedStat = await Stat.deleteOne({_id: req.params.statID});
    const newStats = await Champ.findOneAndUpdate({_id: req.params.champID}, {$pull: {stats: req.params.statID}}).populate('stats');
    res.send(newStats);
});

router.get('api/statByName/:name', async (req, res) => {
    const found = await Stat.finde({ statName: req.params.name });
    res.send(found);
})
module.exports = router;
