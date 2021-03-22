import React from 'react';
import './style.css';
import DemoCard from "../../components/NewDemoCardlol";
import PlayerCard from '../../components/PlayerCard';
import StatCard from '../../components/StatCard';
import TeamCard from '../../components/TeamCard';
import SaveBtn from '../../components/SaveBtn';

function CreateChamp() {
    return (
        <div className="container">
            <br />
            <h1 className="title shadow">Create Champ Page</h1>
            <StatCard className="shadow"/>
            <TeamCard />
            <PlayerCard />
            <SaveBtn />
        </div>
    );
};

export default CreateChamp;