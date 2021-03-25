const router = require("express").Router();
const Team = require('../models/Team');
const Champ = require('../models/Championship');

router.post('/api/createTeam/:champID', async (req, res) => {
    const team = req.body;
    console.log(team);
    const newTeam = await Team.create(team);

    const updatedTeam = await Champ.findOneAndUpdate({_id: req.params.champID}, {$push: {teams: newTeam._id}});

    console.log(newTeam);
    res.send(newTeam);
});

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
