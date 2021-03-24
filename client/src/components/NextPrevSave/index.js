import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './style.css';

const PrevNextBtns = ({ index, setIndex, players, tmpResult, setTmpResult }) => {
    return (
        <Container>
            <Row>
                <Col><Button id="nxtBtn" variant='dark' block onClick={async (e) => {
                    console.log(tmpResult);
                    let playerInfo = {
                        playerID: players[index]._id,
                        statsToUpdate: []
                    }
                    tmpResult.forEach(async (result) => {
                        let stat = {
                            statName: result.statName,
                            value: result.value
                        };
                        playerInfo.statsToUpdate.push(stat);
                    })
                    console.log(playerInfo);
                    let updatedPlayer = await axios.put(`/api/updatePlayerStats`, playerInfo);
                    setTmpResult([]);
                    players[index].stats.forEach(stat => {
                        document.getElementById(stat.statName).value = '';
                    })
                    if (index === players.length - 1) {
                        setIndex(0)
                    }
                    else{
                        setIndex(index + 1)
                    }
                }}>...Next</Button></Col>
            </Row>
        </Container>
    );
};

export default PrevNextBtns;
