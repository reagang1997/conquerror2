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
                    <Table className="table" sortable={true} data={[
                        { PlayerName: 'Jose', Kills: 3, Deaths: 42, Headshots: 0 },
                        { PlayerName: 'Angel', Kills: 30, Deaths: 3, Headshots: 10 },
                        { PlayerName: 'Dave', Kills: 22, Deaths: 5, Headshots: 9 },
                        { PlayerName: 'Reagan', Kills: 35, Deaths: 1, Headshots: 11 },
                    ]} />
                </Col>
            </Row>
            <br />
        </Container>
    );
};

export default ResultsCard;