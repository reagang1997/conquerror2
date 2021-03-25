const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamName: {
        type: String,
        required: true
    },

    players: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Player'
        }
    ],

    stats: Array
}); 

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;