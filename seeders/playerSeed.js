const mongoose = require('mongoose');
const Player = require('../models/Player');

mongoose.connect("mongodb://localhost/conquerror", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const playerSeed = [
    {
        playerName: 'Reagan',
        team: '',
        stats: []
    },
    {
        playerName: 'Dave',
        team: '',
        stats: []
    },
    {
        playerName: 'Jose',
        team: '',
        stats: []
    },
    {
        playerName: 'Angel',
        team: '',
        stats: []
    }
];

Player.deleteMany({})
    .then(() => Player.collection.insertMany(playerSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

