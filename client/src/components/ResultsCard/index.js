import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import Reactable from "reactable";
import axios from 'axios';
import './style.css';

const ResultsCard = ({ champID }) => {

    const [players, setPlayers] = useState([]);
    const [cols, setCols] = useState([]);
    const [update, setUpdate] = useState(0);
    const [keyStat, setKeyStat] = useState({
        keyStatName: '',
        keyStatValue: ''
    });

    const Table = Reactable.Table;
    const Tr = Reactable.Tr;
    const Td = Reactable.Td;
    useEffect(async () => {
        const foundChamp = await axios.get(`/api/champ/${champID}`);

        setKeyStat({keyStatName: foundChamp.data.keyStat, keyStatValue: foundChamp.data.keyStatValue})
        console.log(foundChamp.data);
        setPlayers(foundChamp.data.players);
        // createCol();
    }, [])

    return (
        <Container>
            <br />
            <Row>
                <Col className="mainDiv">
                    <h1>Results</h1>
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