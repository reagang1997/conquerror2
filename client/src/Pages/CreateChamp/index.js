import React, {useEffect, useState} from 'react';
import './style.css';
import DemoCard from "../../components/NewDemoCardlol";
import PlayerCard from '../../components/PlayerCard';
import StatCard from '../../components/StatCard';
import TeamCard from '../../components/TeamCard';
import SaveBtn from '../../components/SaveBtn';

function CreateChamp() {

    const [stats, setStats] = useState([]);

    const [players, setPlayers] = useState([]);

    const [teams, setTeams] = useState([]);

    return (
        <div className="container">
            <br />
            <h1 className="title">Create Champ Page</h1>
            <StatCard stats={stats} setStats={setStats} />
            <TeamCard  teams={teams} setTeams={setTeams}/>
            <PlayerCard players={players} setPlayers={setPlayers}/>
            <SaveBtn />
            <DemoCard />
        </div>
    );
};

export default CreateChamp;