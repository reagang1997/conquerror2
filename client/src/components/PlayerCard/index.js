import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import './style.css';

const PlayerCard = () => {
    return (

        <Container>
            <br />
            <Row>
                <Col md={5} className="leftDiv">
                    <h1>Demo name 1</h1>
                    <Card className="bottomMarg">
                        <ListGroup variant="flush">
                            <ListGroup.Item action variant="secondary">Thing to track<Button variant="dark" className="right">delete?</Button></ListGroup.Item>
                            <ListGroup.Item action variant="secondary">Thing to track<Button variant="dark" className="right">delete?</Button></ListGroup.Item>
                            <ListGroup.Item action variant="secondary">Thing to track<Button variant="dark" className="right">delete?</Button></ListGroup.Item>
                            <ListGroup.Item action variant="secondary">Thing to track<Button variant="dark" className="right">delete?</Button></ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>



                <Col md={{ span: 5, offset: 2 }} className="rightDiv">
                    <h1>Demo name 2</h1>
                    <br />
                    <Button variant="dark" block className="right test">Add Thing</Button>
                    <Form className="bottomMarg">
                        <Form.Row>
                            <Col className="my-1">
                                <Form.Control
                                    as="select"
                                    className="mr-sm-2"
                                    id="inlineFormCustomSelect"
                                >
                                    <option value="0">Choose Team Demo</option>
                                    <option value="1">Team 1</option>
                                    <option value="2">Team 2</option>
                                    <option value="3">Team 3</option>
                                </Form.Control>
                            </Col>
                        </Form.Row>
                    </Form>
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                            Choose Team Demo
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Team 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Team 2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Team 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>

            <br />
        </Container>
    );
};

export default PlayerCard;