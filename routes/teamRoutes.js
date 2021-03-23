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

module.exports = router;
