import React, { useEffect, useState } from "react";
import "./style.css";
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card, ListGroup, Form, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap';
import InputStat from "../InputStat";
import axios from "axios";

const TeamCard = ({ stats, players, teams, setStats, setPlayers, setTeams, update, setUpdate, champID, setChampID }) => {

    const [tmpTeam, setTmpTeam] = useState({
        teamName: ""
    });

    const [champ, setChamp] = useState('');


    useEffect(() => {
        // console.log(tmpStat);
        getChampID();
    }, [tmpTeam])

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
                <Col md={5} className="leftDiv shadow" id='appendBlankTeam'>
                    <h1>Teams</h1>
                    <br />
                    {teams ? teams.map(team => <InputStat key={team.teamName} name={team.teamName}
                        update={update}
                        setUpdate={setUpdate}
                        champID={champID}
                        setChampID={setChampID}
                        id={team._id}
                        flag='team'
                        stats={stats}
                        teams={teams}
                        players={players}
                        setStats={setStats}
                        setPlayers={setPlayers}
                        setTeams={setTeams} />) : <div></div>}

                </Col>



                <Col md={{ span: 5, offset: 2 }} className="rightDiv shadow">
                    <h1>Team Name</h1>
                    <br />
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="New Team"
                            aria-label="Team to Track"
                            aria-describedby="basic-addon2"
                            value={tmpTeam.teamName}
                            onChange={e => setTmpTeam({ teamName: e.target.value })}
                        />
                    </InputGroup>
                    <Button variant="dark" block className="right test"
                        onClick={async (e) => {
                            e.preventDefault();

                            const newTeam = await axios.post(`/api/createTeam/${champ}`, tmpTeam);
                            setUpdate(update + 1);
                            setTmpTeam({ teamName: "" });
                        }}>Add Team</Button>
                </Col>
            </Row>

            <br />
        </Container>



    )
};

export default TeamCard;