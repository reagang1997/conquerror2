import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './style.css';
import { useHistory } from "react-router-dom";


const PrevNextBtns = ({ index, setIndex, players, tmpResult, setTmpResult, updatedCount, setUpdatedCount }) => {
    const history = useHistory();
    return (
        <Container>
            <Row>
                <Col><Button variant='dark' id='nxtBtn' block onClick={async (e) => {
                    if(tmpResult.length === players[index].stats.length){
                        if(updatedCount !== players.length){
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
                            });
                            let updatedPlayer = await axios.put(`/api/updatePlayerStats`, playerInfo);
                            setTmpResult([]);
                            players[index].stats.forEach(stat => {
                                document.getElementById(stat.statName).value = '';
                            })
                            setUpdatedCount(updatedCount + 1);
                        }
                    }
                    
                    if(updatedCount === players.length - 1){
                        alert('All Players have been updated!');
                        history.push('/adminHome');
                    }
                    
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
