
import React from "react";
import "./style.css"
import { Container, Row, Col, Card, ListGroup, Form, Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';


const StatCard = () => {
    return (
        <Container>
            <br />
            <Row>
                <Col md={5} className="leftDiv">
                    <h1>Current Tracking Stat</h1>
                    <Card className="bottomMarg">
                        <ListGroup variant="flush">
                            <ListGroup.Item action variant="secondary">Primary Stat<Button variant="dark" className="right">Add</Button><Button variant="dark" className="right">Delete</Button></ListGroup.Item>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-default">Track Stat</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                            <ListGroup.Item action variant="secondary">Secondary Stat<Button variant="dark" className="right">Add</Button><Button variant="dark" className="right">Delete</Button></ListGroup.Item>

                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-default">Track Stat</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                            <ListGroup.Item action variant="secondary">Tertiary Stat<Button variant="dark" className="right">Add</Button><Button variant="dark" className="right">Delete</Button></ListGroup.Item>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-default">Track Stat</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
};

export default StatCard;