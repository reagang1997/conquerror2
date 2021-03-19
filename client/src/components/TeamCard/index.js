import React from "react";
import "./style.css";
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card, ListGroup, Form, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap';

const TeamCard = () => {
    return (

        <Container>

            <Row>

                <Col md={{ span: 5, offset: 2 }} className="rightDiv">
                    <h1>Create Teams</h1>
                    <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-default">Create Team</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                    
                        <Button variant="dark" block className="right test">Add Team</Button>
                        <Form className="bottomMarg">
                            <Form.Row>
                                <Col className="my-1">
                                    <Form.Control
                                        as="select"
                                        className="mr-sm-2"
                                        id="inlineFormCustomSelect"
                                    >
                                        <option value="0">Choose Team</option>
                                        <option value="1">Team 1</option>
                                        <option value="2">Team 2</option>
                                        <option value="3">Team 3</option>
                                    </Form.Control>
                                </Col>
                            </Form.Row>
                        </Form>
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                Choose Team
                        </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Team 1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Team 2</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Team 3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                </Col>



        </Row>

        </Container>



    )
};

export default TeamCard;