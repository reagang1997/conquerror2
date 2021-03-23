import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Form, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap';
import './style.css';

const NewResults = () => {
    return (
        <Container>
            <div className='resultsDiv'>
                <h1>Player Name</h1>
                <div className='stats2BUpdated'>
                    <Row className="justify-content-md-center">
                        <Col>
                            <Form>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>kills:</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder="placeholder updated with current stat?" />
                                    </Col>
                                </Form.Group>
                            </Form>

                            <Form>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>deaths:</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder="placeholder updated with current stat?" />
                                    </Col>
                                </Form.Group>
                            </Form>

                            <Form>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>headshots:</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder="placeholder updated with current stat?" />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </div>

            </div>
        </Container>
    );
};

export default NewResults;