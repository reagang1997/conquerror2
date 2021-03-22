import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Form, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap';
import './style.css';


const TeamCard = () => {
    return (

        <Container>
            <br />
            <Row>
                <Col md={5} className="leftDiv">
                    <h1>Teams</h1>
                    <br />
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Team to Track"
                            aria-label="Team to Track"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-danger">delete</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Team to Track"
                            aria-label="Team to Track"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-danger">delete</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Team to Track"
                            aria-label="Team to Track"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-danger">delete</Button>
                        </InputGroup.Append>
                    </InputGroup>

                </Col>



                <Col md={{ span: 5, offset: 2 }} className="rightDiv">
                    <h1>Team Name</h1>
                    <br />
                    <Button variant="dark" block className="right test">Add Team</Button>
                </Col>
            </Row>

            <br />
        </Container>

        // <div class="teamCard" id="teamCard">
        //     <div class="card-header">
        //         Create Teams
        //     </div>
        //     <ul class="list-group list-group-flush" id="teamGroup">
        //         <li class="list-group-item" id="team">Team One Name</li>

        //         <input type="text" id="input-team"
        //             name="fname" placeholder="Team Name">
        //         </input>

        //         <li class="list-group-item" id="team">Team Two Name</li>

        //         <input type="text" id="input-team"
        //             name="fname" placeholder="Team Name">
        //         </input>

        //         <li class="list-group-item" id="team">Team Three Name</li>

        //         <input type="text" id="input-team"
        //             name="fname" placeholder="Team Name">
        //         </input>


        //         <li class="list-group-item" id="team">Team Four Name</li>

        //         <input type="text" id="input-team"
        //             name="fname" placeholder="Team Name">
        //         </input>


        //         <li class="list-group-item" id="team">Team Five Name</li>

        //         <input type="text" id="input-team"
        //             name="fname" placeholder="Team Name">
        //         </input>


        //         <li class="list-group-item" id="team">Team Six Name</li>

        //         <input type="text" id="input-team"
        //             name="fname" placeholder="Team Name">
        //         </input>


        //     </ul>

        //     <button class="button add" type="add" value="Add">Add Another Team</button>

        //     <button class="button submit" type="submit" value="Search">Search</button>

        // </div>
    )
};

export default TeamCard;