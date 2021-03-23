const router = require("express").Router();
const Player = require('../models/Player');
const Team = require('../models/Team');
const Champ = require('../models/Championship');
const Stat = require('../models/Stat');

router.post('/api/createPlayer/:teamID/:champID', async (req, res) => {
    const player = req.body;
    const newPlayer = await Player.create(player);

    const updatedTeam = await Team.findOneAndUpdate({ _id: req.params.teamID }, { $push: { players: newPlayer._id } });

    const updatedChamp = await Champ.findOneAndUpdate({ _id: req.params.champID }, { $push: { players: newPlayer._id } });

    const champStats = await Champ.findOne({ _id: req.params.champID });

    champStats.stats.forEach(async (stat) => {
        let foundStat = await Stat.findOne({ _id: stat });
        console.log(foundStat)
        let addedStats = await Player.findOneAndUpdate({ _id: newPlayer._id }, { $push:{ stats: foundStat} });
    })
    res.send(newPlayer);
});

module.exports = router;
