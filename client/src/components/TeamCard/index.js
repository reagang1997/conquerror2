import React, {useState} from "react";
import "./style.css";
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card, ListGroup, Form, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap';

const TeamCard = ({teams, setTeams}) => {

    const [tmpTeam, setTmpTeam] = useState({
        name: ""
    });

    let addTeam = () => {
        console.log('I am being clicked');

        const outerDiv = document.createElement('div');
        outerDiv.setAttribute('class', 'mb-3 input-group');
        const inputEl = document.createElement('input');
        inputEl.setAttribute('placeholder', 'Team to track');
        inputEl.setAttribute('aria-label', 'Team to track');
        inputEl.setAttribute('aria-describedby', 'basic-addon2');
        inputEl.setAttribute('class', 'form-control');
        const innerDiv = document.createElement('div');
        innerDiv.setAttribute('class', 'input-group-append');
        const btnEl = document.createElement('button');
        btnEl.setAttribute('type', 'button');
        btnEl.setAttribute('class', 'btn btn-outline-dark');

        btnEl.textContent = 'delete';

        outerDiv.appendChild(inputEl);
        outerDiv.appendChild(innerDiv);
        innerDiv.appendChild(btnEl);

        let statRow = document.getElementById('appendBlankTeam');
        statRow.append(outerDiv);
    }

    return (

        <Container>

            <br />
            <Row>
                <Col md={5} className="leftDiv shadow" id='appendBlankTeam'>
                    <h1>Teams</h1>
                    <br />
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Team to Track"
                            aria-label="Team to Track"
                            aria-describedby="basic-addon2"
                            value={tmpTeam}
                            onChange={e => setTmpTeam({name: e.target.value})}
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



                <Col md={{ span: 5, offset: 2 }} className="rightDiv shadow">
                    <h1>Team Name</h1>
                    <br />
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Team to Track"
                            aria-label="Team to Track"
                            aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                    <Button variant="dark" block className="right test"
                    onClick={(e) => {
                        e.preventDefault();
                        setTeams([...teams, tmpTeam]);
                        setTmpTeam({name: ""});
                    }}>Add Team</Button>
                </Col>
            </Row>

            <br />
        </Container>



    )
};

export default TeamCard;