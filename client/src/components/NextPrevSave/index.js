import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './style.css';

const PrevNextBtns = () => {
    return (
        <Container>
            <Row>
                <Col><Button variant='dark' block>Prev...</Button></Col>
                <Col><Button variant='dark' block>Save</Button></Col>
                <Col><Button variant='dark' block>...Next</Button></Col>
            </Row>
        </Container>
    );
};

export default PrevNextBtns;
