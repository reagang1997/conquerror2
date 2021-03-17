const mongoose = require('mongoose');
const Stat = require('../models/Stat');

mongoose.connect("mongodb://localhost/conquerror", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const statSeed = [
    {
        statName: 'Kills'
    },
    {
        statName: 'Headshots'
    },
    {
        statName: 'Deaths'
    }
];

Stat.deleteMany({})
    .then(() => Stat.collection.insertMany(statSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

