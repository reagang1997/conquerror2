import React, { useEffect, useState } from 'react';
import './style.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import PlayerCard from '../../components/PlayerCard';
import StatCard from '../../components/StatCard';
import TeamCard from '../../components/TeamCard';
import SaveBtn from '../../components/SaveBtn';


function CreateChamp() {

    const [stats, setStats] = useState([]);

    const [teams, setTeams] = useState([]);

    const [players, setPlayers] = useState([]);

    const [champ, setChamp] = useState({ name: '' });



    useEffect(() => {

    }, [teams])

    return (
        <div className="container">
            <br />
            <div>
                <h1 className="title shadow"> <h1 id={'create-champ'}>Create Champ Page</h1>
                <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Create Champ League"
                            aria-label="Create Champ League"
                            aria-describedby="basic-addon2"
                            value={champ.name}
                            onChange={e => setChamp({ name: e.target.value })}
                        />
                    </InputGroup>

                    <Button variant="dark" onClick={(e) => {
                        e.preventDefault();
                        console.log(champ.name);
                        document.getElementById('create-champ').innerHTML = champ.name
                    }
                    }>Create</Button>
                </h1>
                
            </div>




            <StatCard stats={stats} setStats={setStats} className="shadow" />

            <TeamCard teams={teams} setTeams={setTeams} />
            <PlayerCard players={players} setPlayers={setPlayers} teams={teams} />

            <SaveBtn />
        </div>
    );
};

export default CreateChamp;