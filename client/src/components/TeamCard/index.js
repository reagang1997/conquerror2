import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Form, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap';
import './style.css';


const TeamCard = () => {
    return (

        <Col md={{ span: 5, offset: 2 }} className="rightDiv">
        <h1>Create Teams</h1>
        <br />
        <Button variant="dark" block className="right test">Add Team</Button>
        <Form className="bottomMarg">
            <Form.Row>
                <Col className="my-1">
                    <Form.Control
                        as="select"
                        className="mr-sm-2"
                        id="inlineFormCustomSelect"
                    >
                        <option value="0">Choose Team</option>
                        <option value="1">Team 1</option>
                        <option value="2">Team 2</option>
                        <option value="3">Team 3</option>
                    </Form.Control>
                </Col>
            </Form.Row>
        </Form>
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Choose Team 
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Team 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Team 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Team 3</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </Col>

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