import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import Reactable from "reactable";
import axios from 'axios';
import './style.css';

const ResultsCard = ({ champID }) => {

    const [players, setPlayers] = useState([]);

    const Table = Reactable.Table;
    const Tr = Reactable.Tr;
    const Td = Reactable.Td;
    useEffect(async () => {
        const foundChamp = await axios.get(`/api/champ/${champID}`);
        console.log(foundChamp.data);
        setPlayers(foundChamp.data.players);
    }, [])
    return (
        <Container>
            <br />
            <Row>
                <Col className="mainDiv">
                    <h1>Results</h1>
                    {players ?
                        players.map(player => {
                            return (<Table>
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

                            </Table>)
                        }): <div></div>}
                    {/* <Table className="table" sortable={true} data={[
                        { PlayerName: 'Jose', Kills: 3, Deaths: 42, Headshots: 0 },
                        { PlayerName: 'Angel', Kills: 30, Deaths: 3, Headshots: 10 },
                        { PlayerName: 'Dave', Kills: 22, Deaths: 5, Headshots: 9 },
                        { PlayerName: 'Reagan', Kills: 35, Deaths: 1, Headshots: 11 },
                    ]} /> */}
                </Col>
            </Row>
            <br />
        </Container>
    );
};

export default ResultsCard;