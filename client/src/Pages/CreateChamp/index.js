import React from 'react';
import './style.css';
import PlayerCard from '../../components/PlayerCard';
import StatCard from '../../components/StatCard';
import TeamCard from '../../components/TeamCard';

function CreateChamp() {
    return (
        <div className="create-container">
            <h1 className="title">Create Champ Page</h1>
            <h2>Insert some components here</h2>
            <PlayerCard/>
            <StatCard/>
            <TeamCard/>
        </div>
    );
};

export default CreateChamp;