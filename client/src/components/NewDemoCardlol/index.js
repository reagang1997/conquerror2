import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import './style.css';

const NewDemoCard = () => {
    return (
        <Container>
            <br />
            <Row>
                <Col md={5}>
                    <h1>Demo name 1</h1>
                    <Row>
                        <Card style={{ width: '18rem' }}>
                            
                        </Card>
                    </Row>
                </Col>


                <Col md={{ span: 5, offset: 2 }}>
                    <h1>Demo name 2</h1>
                </Col>
            </Row>


        </Container>
    );
};

export default NewDemoCard;