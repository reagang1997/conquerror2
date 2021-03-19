import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import { Table } from "reactable";
import './style.css';

const ResultsCard = () => {
    return (
        <Container>
            <br />
            <Row>
                <Col className="mainDiv">
                    <h1>Results</h1>
                    <Table className="table" data={[
                        { PlayerName: 'Jose Cordova', Kills: 3, Deaths: 42, Headshots: 0 },
                        { Age: 23, Name: 'Lee Salminen' },
                        { Age: 28, Position: 'Developer' },
                    ]} />
                </Col>
            </Row>
            <br />
        </Container>
    );
};

export default ResultsCard;