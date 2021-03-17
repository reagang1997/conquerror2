const mongoose = require('mongoose');
const Champ = require('../models/Championship');

mongoose.connect("mongodb://localhost/conquerror", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const champSeed = [
    {
        champName: 'The Great Championship',
        stats: [],
        players: [],
        teams: []
    }
];

Champ.deleteMany({})
    .then(() => Champ.collection.insertMany(champSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

