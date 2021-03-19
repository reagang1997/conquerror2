import React from 'react';
import './style.css';
import DemoCard from "../../components/NewDemoCardlol";
import PlayerCard from '../../components/PlayerCard';
import StatCard from '../../components/StatCard';
import TeamCard from '../../components/TeamCard';
import SaveBtn from '../../components/SaveBtn';

function CreateChamp() {
    return (
        <div className="create-container">
            <h1 className="title">Create Champ Page</h1>
            <h2>Insert some components here</h2>
            <DemoCard />
            <SaveBtn />
            <PlayerCard />
            <StatCard />
            <TeamCard />
        </div>
    );
};

export default CreateChamp;