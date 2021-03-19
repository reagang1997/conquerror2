import React from "react";
import "./style.css"

const StatCard = () => {
    return (
        <Container>
            <br />
            <Row>
                <Col md={5} className="leftDiv">
                    <h1>Current Tracking Stat</h1>
                    <Card className="bottomMarg">
                        <ListGroup variant="flush">
                            <ListGroup.Item action variant="secondary">Primary Stat<Button variant="dark" className="right">delete?</Button></ListGroup.Item>
                            <ListGroup.Item action variant="secondary">Secondary Stat<Button variant="dark" className="right">delete?</Button></ListGroup.Item>
                            <ListGroup.Item action variant="secondary">Tertiary Stat<Button variant="dark" className="right">delete?</Button></ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
};

export default StatCard;