const router = require("express").Router();
const Team = require('../models/Team');

router.post('/api/createTeam', async (req, res) => {
    const team = req.body;
    console.log(team);
    const newTeam = await Team.create(team);
    console.log(newTeam);
    res.send(newTeam);
});

module.exports = router;
