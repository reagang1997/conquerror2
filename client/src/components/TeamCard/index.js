import React from "react";
import "./style.css";
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card, ListGroup, Form, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap';

const TeamCard = () => {
    return (

        <Container>

            <br />
            <Row>
                <Col md={5} className="leftDiv shadow">
                    <h1>Teams</h1>
                    <br />
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Team to Track"
                            aria-label="Team to Track"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-danger">delete</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Team to Track"
                            aria-label="Team to Track"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-danger">delete</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Team to Track"
                            aria-label="Team to Track"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-danger">delete</Button>
                        </InputGroup.Append>
                    </InputGroup>

                </Col>



                <Col md={{ span: 5, offset: 2 }} className="rightDiv shadow">
                    <h1>Team Name</h1>
                    <br />
                    <Button variant="dark" block className="right test">Add Team</Button>
                </Col>
            </Row>

            <br />
        </Container>



    )
};

export default TeamCard;