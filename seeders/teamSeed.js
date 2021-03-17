const mongoose = require('mongoose');
const Team = require('../models/Team');

mongoose.connect("mongodb://localhost/conquerror", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const teamSeed = [
    {
        teamName: 'Killaz'
    },
    {
        teamName: 'Nukes'
    }
];

Team.deleteMany({})
    .then(() => Team.collection.insertMany(teamSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });