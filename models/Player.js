const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    playerName: {
        type: String
        },

    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },

    stats: Array
}); 

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;