
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, ListGroup, Button, Form, Dropdown, DropdownButton, InputGroup, FormControl, Tooltip, OverlayTrigger } from 'react-bootstrap';
import InputStat from '../../components/InputStat';



const StatCard = ({ stats, players, teams, setStats, setPlayers, setTeams, update, setUpdate, champID, setChampID }) => {

    const [tmpStat, setTmpStat] = useState({
        name: "",
        id: ""
    });

    const [champ, setChamp] = useState('');

    const [keyStat, setKeyStat] = useState('');

    const [keyStatValue, setKeyStatValue] = useState('');

    useEffect(() => {
        getChampID();
    }, [stats])

    const getChampID = () => {
        let url = window.location.href;
        url = url.split('/');

        if (url.length !== 6) {
            url = window.location.href;
            url = url.split('/');
            setChamp(url[url.length - 1])

        }

    }

    let addStat = (e) => {

        const stat = document.getElementsByClassName('stat');



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
                    {stats ? stats.map(stat => {
                        return (
                            <InputStat name={stat.statName}
                                update={update}
                                setUpdate={setUpdate}
                                champID={champID}
                                setChampID={setChampID}
                                id={stat._id}
                                flag='stat'
                                stats={stats}
                                teams={teams}
                                players={players}
                                setStats={setStats}
                                setPlayers={setPlayers}
                                setTeams={setTeams} />
                        );
                    }) : <div></div>}

                </Col>



                <Col md={{ span: 5, offset: 2 }} className="rightDiv shadow">
                    <h1>Stats to Track</h1>
                    <br />
                    <InputGroup className="mb-3">
                        <FormControl className='stat'
                            id='stat'
                            placeholder="New Stat"
                            aria-label="Stat to Track"
                            aria-describedby="basic-addon2"
                            value={tmpStat.name}
                            onChange={e => setTmpStat({ ...tmpStat, name: e.target.value })}
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
                                    //update as key stat
                                    setKeyStat(e.target.value);
                                    const updated = await axios.put(`/api/champ/updateKeyStat/${e.target.value}/${champID}`);
                                }}>

                                    <option>Select Stat</option>
                                    {stats ? stats.map(stat => <option >{stat.statName}</option>) : console.log('no stats')}



                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Form.Group>

                    <Form>
                        <Form.Check inline type='radio' name="group1" id="Check1" value="highestToLowest" label='Highest to Lowest' onClick={async (e) => {
                            setKeyStatValue(e.target.value)
                            const updated = await axios.put(`/api/champ/updateKeyStatValue/${e.target.value}/${champID}`);
                        }} />
                        <Form.Check inline type='radio' name="group1" id="Check2" value="lowestToHighest" label='Lowest to Highest' onClick={async (e) => {
                            setKeyStatValue(e.target.value)
                            const updated = await axios.put(`/api/champ/updateKeyStatValue/${e.target.value}/${champID}`);
                            } }/>
                    </Form>
                    <br />

                    <Button variant="dark" block className="right test" onClick={async (e) => {
                        document.getElementById('stat').value = "";
                        e.preventDefault();
                        const newStat = await axios.post(`/api/createStat/${champ}`, tmpStat);
                        const tmpid = newStat.data._id;

                        setUpdate(update + 1);
                    }}>Add Stat</Button>

                </Col>
            </Row>

            <br />
        </Container>
    )
};

export default StatCard;