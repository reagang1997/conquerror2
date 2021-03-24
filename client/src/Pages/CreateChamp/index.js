import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, useHistory } from "react-router-dom";

import axios from 'axios';
import './style.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import PlayerCard from '../../components/PlayerCard';
import StatCard from '../../components/StatCard';
import TeamCard from '../../components/TeamCard';
import SaveBtn from '../../components/SaveBtn';


function CreateChamp() {

    const history = useHistory();

    const [stats, setStats] = useState([]);

    const [teams, setTeams] = useState([]);

    const [players, setPlayers] = useState([]);

    const [champ, setChamp] = useState({ name: '' });

    const [champID, setChampID] = useState("");



    useEffect(() => {
        let url = window.location.href;
        url = url.split('/');
        console.log('url: ', url)
        if (url.length !== 6) {
            getTmpChamp();
            url = window.location.href;
            url = url.split('/');
            setChampID(url[url.length - 1])

        }
    }, [teams])

    const getTmpChamp = async () => {
        const tmpChamp = await axios.get('/api/tmpChamp');
        console.log(tmpChamp.data)
        history.push(`/createChampionship/${tmpChamp.data._id}`)
    }



    return (
        <div className="container">
            <br />
            <div>
                <h1 className="title shadow"> <h1 id={'create-champ'}>Create Your League</h1>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Create Champ League"
                            aria-label="Create Champ League"
                            aria-describedby="basic-addon2"
                            value={champ.name}
                            onChange={e => setChamp({ name: e.target.value })}
                        />
                    </InputGroup>

                    <Button variant="dark" onClick={async (e) => {
                        e.preventDefault();
                        console.log(champ.name);
                        document.getElementById('create-champ').innerHTML = champ.name
                        const newName = axios.put('/api/updateChampName', champ);
                    }
                    }>Create</Button>
                </h1>

            </div>




            <StatCard stats={stats} setStats={setStats} champID={champID} className="shadow" />

            <TeamCard teams={teams} setTeams={setTeams} />
            <PlayerCard players={players} setPlayers={setPlayers} teams={teams} />

            <SaveBtn />
        </div>
    );
};

export default CreateChamp;