import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Form, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap';
import InputStat from '../InputStat';
import './style.css';

const PlayerCard = ({teams, players, setPlayers}) => {

    const [tmpPlayer, setTmpPlayer] = useState({
        name: ""
    })

    const [teamID, setTeamID] = useState('');

    return (

        <Container>
            <br />
            <Row>
                <Col md={5} className="leftDiv shadow" id='appendBlankPlayer'>

                    <h1>Players</h1>
                    <br />
                    {players ? players.map(player => <InputStat name={player.name}/>) : <div></div> }

                </Col>



                <Col md={{ span: 5, offset: 2 }} className="rightDiv shadow">

                    <h1>Player Name</h1>
                    <br />
                    <InputGroup>
                        <FormControl
                            placeholder="new team name"
                            aria-label="new team name"
                            aria-describedby="basic-addon2"
                            value={tmpPlayer.name}
                            onChange={e => setTmpPlayer({ name: e.target.value })}
                        />

                        <DropdownButton
                            as={InputGroup.Append}
                            variant="outline-dark"
                            title="Dropdown"
                            id="input-group-dropdown-2"
                            onSelect={(e) => {
                                
                            }}
                        >
                            {teams ? teams.map(team => <Dropdown.Item href="#" onClick={(e) => {
                                const teamName = e.target.textContent;
}}>{team.teamName}</Dropdown.Item>) : console.log('no teams')}
                        </DropdownButton>
                    </InputGroup>
                    <br />
                   
                    <Button variant="dark" block className="right test"
                    onClick={e => {
                        e.preventDefault();
                        setPlayers([...players, tmpPlayer]);
                        setTmpPlayer({name: ""});
                    }}>Add Player</Button>

                </Col>
            </Row>

            <br />
        </Container>

    )

};

export default PlayerCard;