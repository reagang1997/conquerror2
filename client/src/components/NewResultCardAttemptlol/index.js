import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Form, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap';
import './style.css';

const NewResults = ({ players, index }) => {
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
                                                <Form.Control type="text" placeholder="0" />
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