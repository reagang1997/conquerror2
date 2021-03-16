const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statSchema = new Schema({
    statName: {
        type: String,
        required: true
    }
});


const Stat = mongoose.model('Stat', statSchema);

module.exports = Stat;