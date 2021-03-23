import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './style.css';

const PrevNextBtns = ({index, setIndex}) => {
    return (
        <Container>
            <Row>
                <Col><Button variant='dark' block onClick={(e) => setIndex(index - 1)}>Prev...</Button></Col>
                <Col><Button variant='dark' block>Save</Button></Col>
                <Col><Button variant='dark' block onClick={(e) => setIndex(index + 1)}>...Next</Button></Col>
            </Row>
        </Container>
    );
};

export default PrevNextBtns;
