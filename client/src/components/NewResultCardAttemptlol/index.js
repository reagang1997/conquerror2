import React, { useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Form, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap';
import './style.css';

const NewResults = ({ players, index, results, setResults, tmpResult, setTmpResult }) => {

    useEffect(() => {

    }, [players])

    return (
        <Container>
            <div className='resultsDiv'>
                <h1>{players.length > 0 ? players[index].playerName : "player name"}</h1>
                <div className='stats2BUpdated'>
                    <Row className="justify-content-md-center">
                        <Col>
                            {players.length > 0 ? players[index].stats.map(stat => {
                                
                                return (
                                    <Form>
                                        <Form.Group as={Row}>
                                            <Form.Label column sm={2}>{stat.statName}</Form.Label>
                                            <Col sm={10}>
                                                <Form.Control type="text" placeholder="0" id={stat.statName} onBlur={(e) => {
                                                    let foundDupe = false;
                                                    const filteredResults = tmpResult.map(result => {
                                                        if(result.statName === stat.statName){
                                                            result.value = e.target.value;
                                                            foundDupe = true;
                                                            return result;
                                                        }
                                                        else{
                                                            return result;
                                                        }
                                                    })
                                                    if(foundDupe){
                                                        return setTmpResult(filteredResults);
                                                    }
                                                    else{
                                                        const entry = {
                                                            statName: stat.statName,
                                                            value: e.target.value
                                                        }
                                                        return setTmpResult([...tmpResult, entry])
                                                    }
                                                    
                                                }}/>
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                )
                            })
                                :
                                <div>
                                </div>}

                        </Col>
                    </Row>
                </div>

            </div>
        </Container>
    );
};

export default NewResults;