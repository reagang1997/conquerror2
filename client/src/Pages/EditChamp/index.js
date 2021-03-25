import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, useHistory } from "react-router-dom";

import axios from 'axios';
import './style.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import PlayerCard from '../../components/PlayerCard';
import StatCard from '../../components/StatCard';
import TeamCard from '../../components/TeamCard';
import SaveBtn from '../../components/SaveBtn';


function EditChamp({champID, setChampID}) {

    const history = useHistory();

    const [stats, setStats] = useState([]);

    const [teams, setTeams] = useState([]);

    const [players, setPlayers] = useState([]);

    const [champ, setChamp] = useState({ name: '' });

    const [renderCount, setRenderCount] = useState(0);

    const [update, setUpdate] = useState(0);


    useEffect(() => {
        getStats();
        getTeams();
        getPlayers();
        getChampName();
    }, [update])

    const getPlayers = async () => {
        const tmpPlayers = await axios.get(`/api/champPlayers/${champID}`);
        setPlayers(tmpPlayers.data.players)
    }

    const getTeams = async () => {
        const tmpTeams = await axios.get(`/api/champTeams/${champID}`);
        console.log(tmpTeams);
        setTeams(tmpTeams.data.teams);
    }

    const getStats = async () => {
        const tmpStats = await axios.get(`/api/champStats/${champID}`);
        console.log(tmpStats.data.stats)
        setStats(tmpStats.data.stats);
    }
    const getChampName = async () => {
        const name = await axios.get(`/api/champ/${champID}`);
        setChamp({name: name.data.champName})
        
    }



    return (
        <div className="container">
            <br />
            <div>
                <h1 className="title shadow"> <h1 id={'create-champ'}>{champ.name}</h1>
                
                </h1>

            </div>




            <StatCard stats={stats} setStats={setStats} champID={champID} setChampID={setChampID} update={update} setUpdate={setUpdate} className="shadow" />

            <TeamCard teams={teams} setTeams={setTeams} update={update} setUpdate={setUpdate} champID={champID} setChampID={setChampID}/>
            <PlayerCard players={players} setPlayers={setPlayers} teams={teams} update={update} setUpdate={setUpdate} champID={champID} setChampID={setChampID} />

            <SaveBtn />
        </div>
    );
};

export default EditChamp;