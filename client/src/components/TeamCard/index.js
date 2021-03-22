import React, {useEffect, useState} from "react";
import "./style.css";
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card, ListGroup, Form, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap';
import InputStat from "../InputStat";

const TeamCard = ({teams, setTeams}) => {

    const [tmpTeam, setTmpTeam] = useState({
        name: ""
    });

    useEffect(() => {
        console.log(teams);
    }, [tmpTeam]);


    return (

        <Container>

            <br />
            <Row>
                <Col md={5} className="leftDiv shadow" id='appendBlankTeam'>
                    <h1>Teams</h1>
                    <br />
                    {teams ? teams.map(team => <InputStat name={team.name}/>) : <div></div>}

                </Col>



                <Col md={{ span: 5, offset: 2 }} className="rightDiv shadow">
                    <h1>Team Name</h1>
                    <br />
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Team to Track"
                            aria-label="Team to Track"
                            aria-describedby="basic-addon2"
                            value={tmpTeam.name}
                            onChange={e => setTmpTeam({name: e.target.value})}
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