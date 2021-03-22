import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Form, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap';
import './style.css';

const PlayerCard = ({teams}) => {

    return (



        <Container>
            <br />
            <Row>
                <Col md={5} className="leftDiv shadow" id='appendBlankPlayer'>

                    <h1>Players</h1>
                    <br />

                </Col>



                <Col md={{ span: 5, offset: 2 }} className="rightDiv shadow">

                    <h1>Player Name</h1>
                    <br />
                    <InputGroup>
                        <FormControl
                            placeholder="new team name"
                            aria-label="new team name"
                            aria-describedby="basic-addon2"
                        />

                        <DropdownButton
                            as={InputGroup.Append}
                            variant="outline-dark"
                            title="Dropdown"
                            id="input-group-dropdown-2"
                        >
                            {teams ? teams.map(team => <Dropdown.Item href="#">{team.name}</Dropdown.Item>) : console.log('no teams')}
                        </DropdownButton>
                    </InputGroup>
                    <br />
                   
                    <Button variant="dark" block className="right test">Add Player</Button>

                </Col>
            </Row>

            <br />
        </Container>

    )

};

export default PlayerCard;