
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, ListGroup, Button, Form, Dropdown, DropdownButton, InputGroup, FormControl, Tooltip, OverlayTrigger } from 'react-bootstrap';
import InputStat from '../../components/InputStat';
import './style.css';



const StatCard = ({ stats, players, teams, setStats, setPlayers, setTeams }) => {

    const [tmpStat, setTmpStat] = useState({
        name: ""
    });

    const [champ, setChamp] = useState('');

    useEffect(() => {
        // console.log(tmpStat);
        getChampID();
    }, [tmpStat])

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

    let addStat = (e) => {

        const stat = document.getElementsByClassName('stat');

        // console.log(stat);
        console.log('I am being clicked');

    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Key Stat is the stat your championship will be based off of.
        </Tooltip>
    );


    return (
        <Container>
            <br />
            <Row>

                <Col md={5} className="leftDiv shadow" id='appendBlankStat'>
                    <h1>Current Tracking Stats</h1>
                    <br />
                    {stats.map(stat => {
                        return (
                            <InputStat name={stat.name} flag='stat'
                                stats={stats}
                                teams={teams}
                                players={players}
                                setStats={setStats}
                                setPlayers={setPlayers}
                                setTeams={setTeams} />
                        );
                    })}

                </Col>



                <Col md={{ span: 5, offset: 2 }} className="rightDiv shadow">
                    <h1>Stats to Track</h1>
                    <br />
                    <InputGroup className="mb-3">
                        <FormControl className='stat'
                            id='stat'
                            placeholder="Stat to Track"
                            aria-label="Stat to Track"
                            aria-describedby="basic-addon2"
                            value={tmpStat.name}
                            onChange={e => setTmpStat({ name: e.target.value })}
                        />
                    </InputGroup>

                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                            <Form.Label column sm={3}>
                                Key Stat:
                            </Form.Label>
                        </OverlayTrigger>
                        <Col sm={9}>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select" onChange={async (e) => {
                                    const teamName = e.target.value;
                                    console.log(teamName);
                                    let id = await axios.get(`/api/teamByName/${teamName}`);
                                    id = id.data._id;

                                }}>
                                    <option>Select a Team</option>
                                    {teams ? teams.map(team => <option >{team.teamName}</option>) : console.log('no teams')}

                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Form.Group>

                    <Form>
                        <Form.Check inline type='checkbox' label='highest to lowest'/>
                        <Form.Check inline type='checkbox' label='lowest to highest'/>
                    </Form>
                    <br />

                    <Button variant="dark" block className="right test" onClick={async (e) => {
                        e.preventDefault();
                        console.log(champ);
                        const newStat = axios.post(`/api/createStat/${champ}`, tmpStat);
                        setStats([...stats, tmpStat]);
                        setTmpStat({ name: "" });
                        // console.log(stats);
                        // console.log(tmpStat);
                        document.getElementById('stat').value = "";
                    }}>Add Stat</Button>

                </Col>
            </Row>

            <br />
        </Container>
    )
};

export default StatCard;