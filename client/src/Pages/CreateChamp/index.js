import React from 'react';
import './style.css';
import { InputGroup, FormControl, Button} from 'react-bootstrap';
import PlayerCard from '../../components/PlayerCard';
import StatCard from '../../components/StatCard';
import TeamCard from '../../components/TeamCard';
import SaveBtn from '../../components/SaveBtn';


function CreateChamp() {
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





            <StatCard className="shadow" />
            <TeamCard />
            <PlayerCard />
            <SaveBtn />
        </div>
    );
};

export default CreateChamp;