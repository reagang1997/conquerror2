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
        let addedStats = await Player.findOneAndUpdate({ _id: newPlayer._id }, { $push: { stats: foundStat } });
    })
    res.send(newPlayer);
});

router.get('/api/players/:playerID/:champID', async (req, res) => {
    const deletedStat = await Player.deleteOne({_id: req.params.playerID});
    const newPlayers = await Champ.findOneAndUpdate({_id: req.params.champID}, {$pull: {players: req.params.playerID}}).populate('players');
    res.send(newPlayers);
});

router.put('/api/updatePlayerStats', async (req, res) => {
    const { playerID, statsToUpdate } = req.body;
    let playerStats = await Player.findOne({ _id: playerID });
    playerStats = playerStats.stats;
    console.log(playerStats);
    const updatedStats = playerStats.map(playerStat => {
        statsToUpdate.forEach(stat => {
            if (stat.statName === playerStat.statName) {
                playerStat.value += +stat.value;
                return playerStat;
            }
        });
        return playerStat;
    })
    console.log(updatedStats);

    const updatedPlayer = await Player.findOneAndUpdate({ _id: playerID }, { $set: { stats: updatedStats } }, { new: true });
    console.log(updatedPlayer);
    res.send(updatedPlayer);
    // const updatedPlayer = await Player.findOne({ _id: playerID });

    // console.log(updatedPlayer);

})

module.exports = router;
