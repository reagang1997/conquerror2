import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Form, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap';
import './style.css';

const PlayerCard = () => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col md-4">
                        {/* This next bit will be appended in a list on the working version. This is mockup */}
                        <ListGroup>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item><Button variant="dark" className="right">delete?</Button>{''}
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="col md-4">

                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2">Add</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PlayerCard;