import React, {useEffect, useState} from 'react';
import './style.css';
import { InputGroup, FormControl, Button} from 'react-bootstrap';
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

          


            <div>
                <h1 className="title shadow">Create Champ Page
                 <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Create Champ League"
                            aria-label="Create Champ League"
                            aria-describedby="basic-addon2"
                        />
                    </InputGroup>

                    <Button variant="dark">Create</Button>
                </h1>
            </div>




            <StatCard stats={stats} setStats={setStats} className="shadow" />
            <TeamCard  teams={teams} setTeams={setTeams}/>
            <PlayerCard players={players} setPlayers={setPlayers}/>
          
            <SaveBtn />
        </div>
    );
};

export default CreateChamp;