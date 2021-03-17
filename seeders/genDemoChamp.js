const mongoose = require('mongoose');
const Champ = require('../models/Championship');
const Player = require('../models/Player');
const Team = require('../models/Team');
const Stat = require('../models/Stat');
const User = require('../models/User');

mongoose.connect("mongodb://localhost/conquerror", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const demoChamp = async () => {
    const champ = await Champ.find({});
    const teams = await Team.find({});
    const players = await Player.find({});
    const stats = await Stat.find({});

    const pushedStats = () => {
        stats.forEach(async (stat) => {
            const pushed = await Champ.updateOne({ champName: 'The Great Championship' }, { $push: { stats: stat._id } }, { new: true });
        })
    };

    const pushedPlayers = () => {
        players.forEach(async (player) => {
            const pushed = await Champ.updateOne({ champName: 'The Great Championship' }, { $push: { players: player._id } }, { new: true });
        })
    };

    const pushedTeams = () => {
        teams.forEach(async (team) => {
            const pushed = await Champ.updateOne({ champName: 'The Great Championship' }, { $push: { teams: team._id } }, { new: true });
        })
    };

    const copyStatsToPlayer = () => {
        players.forEach(async (player) => {
            stats.forEach(async (stat) => {
                const pushed = await Player.updateOne({ playerName: player.playerName }, { $push: { stats: stat } });
            })
        })
    }

    const assignPlayerToTeam = async () => {
        let pushed;
        for (let i = 0; i < players.length; i++) {
            if (i < 2) {
                pushed = await Team.updateOne({ teamName: 'Killaz' }, { $push: { players: players[i]._id } });
            }
            else {
                pushed = await Team.updateOne({ teamName: 'Nukes' }, { $push: { players: players[i]._id } });
            }
        }
    }

    const addAdminToChamp = async () => {
        const admin = await User.find({});
        console.log(admin)
        const champ = await Champ.findOne({champName: 'The Great Championship'});

        const pushed = await Champ.findOneAndUpdate({champName: champ.champName}, {$push: {admin: admin[0]._id}});

    }

    

    pushedStats();
    pushedPlayers();
    pushedTeams();
    copyStatsToPlayer();
    assignPlayerToTeam();
    assignTeamToPlayer();

    addAdminToChamp();

    
}

demoChamp();


const assignTeamToPlayer = async () => {
    const killaz = await Team.findOne({ teamName: 'Killaz' });
    const nukes = await Team.findOne({ teamName: 'Nukes' });
    

    let pushed;

    killaz.players.forEach(async (killa) => {
        pushed = await Player.findOneAndUpdate({ _id: killa }, { team: killaz._id })
    })

    nukes.players.forEach(async (nuke) => {
        pushed = await Player.findOneAndUpdate({ _id: nuke }, { team: nukes._id })
    })

}

assignTeamToPlayer();