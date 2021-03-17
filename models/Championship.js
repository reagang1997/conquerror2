const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const champSchema = new Schema({

    champName: String,

    stats: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Stat'
        }
    ],
    teams: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Team'
        }
    ],
    players: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Player'
        }
    ]
});

const Championship = mongoose.model('Championship', champSchema);

module.exports = Championship;