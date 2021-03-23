import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Form, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap';
import InputStat from '../InputStat';
import axios from 'axios';
import './style.css';

const PlayerCard = ({ teams, players, setPlayers }) => {

    const [tmpPlayer, setTmpPlayer] = useState({
        playerName: "",
        team: ""
    })

    const [champ, setChamp] = useState('');

    useEffect(() => {
        // console.log(tmpStat);
        getChampID();
    }, [tmpPlayer])

    const getChampID = () => {
        let url = window.location.href;
        url = url.split('/');
        console.log('url: ', url)
        if (url.length !== 6) {
            url = window.location.href;
            url = url.split('/');
            setChamp(url[url.length - 1])

        }
    }


    return (

        <Container>
            <br />
            <Row>
                <Col md={5} className="leftDiv shadow" id='appendBlankPlayer'>

                    <h1>Players</h1>
                    <br />
                    {players ? players.map(player => <InputStat name={player.playerName} />) : <div></div>}

                </Col>



                <Col md={{ span: 5, offset: 2 }} className="rightDiv shadow">

                    <h1>Player Name</h1>
                    <br />
                    <InputGroup>
                        <FormControl
                            placeholder="new player name"
                            aria-label="new player name"
                            aria-describedby="basic-addon2"
                            value={tmpPlayer.name}
                            onChange={e => setTmpPlayer({ ...tmpPlayer, playerName: e.target.value })}
                        />

                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select" onChange={async (e) => {
                                const teamName = e.target.value;
                                console.log(teamName);
                                let id = await axios.get(`/api/teamByName/${teamName}`);
                                id = id.data._id;
                                setTmpPlayer({ ...tmpPlayer, team: id });

                            }}>
                                <option>Select a Stat</option>
                                {teams ? teams.map(team => <option >{team.teamName}</option>) : console.log('no teams')}
                            </Form.Control>
                        </Form.Group>
                    </InputGroup>
                    <br />

                    <Button variant="dark" block className="right test"
                        onClick={async (e) => {
                            e.preventDefault();
                            const newPlayer = await axios.post(`/api/createPlayer/${tmpPlayer.team}/${champ}`, tmpPlayer)
                            setPlayers([...players, tmpPlayer]);
                            setTmpPlayer({ ...tmpPlayer, playerName: "" });
                        }}>Add Player</Button>

                </Col>
            </Row>

            <br />
        </Container>

    )

};

export default PlayerCard;