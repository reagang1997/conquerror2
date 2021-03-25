import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import Reactable from "reactable";
import axios from 'axios';
import './style.css';
import { set } from 'mongoose';

const ResultsCard = ({ champID }) => {

    const [players, setPlayers] = useState([]);
    const [cols, setCols] = useState([]);
    const [update, setUpdate] = useState(0);
    const [keyStat, setKeyStat] = useState({
        keyStatName: '',
        keyStatValue: ''
    });
    const [teams, setTeamStats] = useState([]);

    const Table = Reactable.Table;
    const Tr = Reactable.Tr;
    const Td = Reactable.Td;
    useEffect(async () => {
        const foundChamp = await axios.get(`/api/champ/${champID}`);
        setKeyStat({ keyStatName: foundChamp.data.keyStat, keyStatValue: foundChamp.data.keyStatValue })
        console.log(foundChamp.data);
        setPlayers(foundChamp.data.players);
        getTeamStats();
        // createCol();
    }, [])

    const getTeamStats = async () => {
        let tmpTeams = await axios.get(`/api/populatedChampTeams/${champID}`);
        tmpTeams = tmpTeams.data.teams;
        console.log(tmpTeams);

        setTeamStats(tmpTeams);
        


    }

    return (
        <Container>
            <br/>
            <Row>
                <Col className="mainDiv">
                    <h1>Team Results</h1>
                    {teams ?
                        <Table className='table' id='table' sortable={true}>
                            {teams.map(team => {
                                console.log(team);
                                return (
                                    <Tr>
                                        <Td column="Team Name" data={team.teamName}/>
                                        
                                        {team.stats.map(stat => {
                                            console.log(stat);
                                            return (

                                                <Td column={stat.statName} data={stat.value}>
                                                    {stat.value}
                                                </Td>
                                            )
                                        })}
                                    </Tr>

                                )
                            })}</Table> : <div></div>}
                   
                </Col>
            </Row>
            <br />
            <Row>
                <Col className="mainDiv">
                    <h1>Player Results</h1>
                    {players ?
                        <Table className='table' id='table' sortable={true}>
                            {players.map(player => {
                                return (
                                    <Tr>
                                        <Td column="Player Name" data={player.playerName}>
                                            <b>{player.playerName}</b>
                                        </Td>
                                        {player.stats.map(stat => {
                                            return (

                                                <Td column={stat.statName} data={stat.value}>
                                                    {stat.value}
                                                </Td>
                                            )
                                        })}
                                    </Tr>

                                )
                            })}</Table> : <div></div>}
                   
                </Col>
            </Row>
            <br />
            

        </Container>
    );
};

export default ResultsCard;