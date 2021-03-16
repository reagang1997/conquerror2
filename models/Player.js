const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    playerName: {
        type: String,
        required: true
    },

    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }
}); 

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;