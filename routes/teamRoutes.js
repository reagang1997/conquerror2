const router = require("express").Router();
const Team = require('../models/Team');
const Champ = require('../models/Championship');
const Stat = require('../models/Stat');
const Player = require("../models/Player");

router.post('/api/createTeam/:champID', async (req, res) => {
    const team = req.body;
    console.log(team);
    const newTeam = await Team.create(team);
    let addedStats;
    const updatedChamp = await Champ.findOneAndUpdate({_id: req.params.champID}, {$push: {teams: newTeam._id}}, {new: true});
    updatedChamp.stats.forEach(async (stat) => {
        let foundStat = await Stat.findOne({ _id: stat });
        console.log(foundStat)
        addedStats = await Team.findOneAndUpdate({ _id: newTeam._id }, { $push: { stats: foundStat } }, {new: true});
        console.log(addedStats);
    })
    res.send(addedStats);
});

router.put('/api/teams/updateTeamStats/', async (req, res) => {
    const {playerID, statsToUpdate} = req.body;

    let playerTeam = await Player.findOne({_id: playerID});
    playerTeam = playerTeam.team;

    const team = await Team.findOne({_id: playerTeam});
    console.log(team)
    let tmpStats = team.stats;
    const updatedStats = tmpStats.map(stat => {
        statsToUpdate.forEach(statToUpdate => {
            if(stat.statName === statToUpdate.statName){
                stat.value += +statToUpdate.value;
                return stat;
            }
        })
        return stat;
    })

    const updatedTeam = await Team.findOneAndUpdate({_id: playerTeam}, {$set: {stats: updatedStats}}, {new: true});

    res.send(updatedTeam);
})

router.get('/api/teams/:teamID/:champID', async (req, res) => {
    const deletedStat = await Team.deleteOne({_id: req.params.teamID});
    const newTeams = await Champ.findOneAndUpdate({_id: req.params.champID}, {$pull: {teams: req.params.teamID}}).populate('teams');
    res.send(newTeams);
});

router.get('/api/teamByName/:teamName', async (req, res) => {
    const team = req.params.teamName;
    console.log(team);
    const foundTeam = await Team.findOne({teamName: team});
    console.log(foundTeam);
    res.send(foundTeam);
})

module.exports = router;
