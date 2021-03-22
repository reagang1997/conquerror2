
import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Form, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap';
import InputStat from '../../components/InputStat';
import './style.css';



const StatCard = () => {
    let addStat = () => {
        console.log('I am being clicked');

        // let blankStat = 
        // <InputGroup className="mb-3">
        //     <FormControl
        //         placeholder="Stat to Track"
        //         aria-label="Stat to Track"
        //         aria-describedby="basic-addon2"
        //     />
        //     <InputGroup.Append>
        //         <Button variant="outline-dark">delete</Button>
        //     </InputGroup.Append>
        // </InputGroup>;
        const outerDiv = document.createElement('div');
        outerDiv.setAttribute('class', 'mb-3 input-group');
        const inputEl = document.createElement('input');
        inputEl.setAttribute('placeholder', 'Stat to track');
        inputEl.setAttribute('aria-label', 'Stat to track');
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

        let statRow = document.getElementById('appendBlankStat');
        statRow.append(outerDiv);
    }


    return (
        <Container>
            <br />
            <Row>

                <Col md={5} className="leftDiv" id='appendBlankStat'>
                    <h1>Current Tracking Stats</h1>
                    <br />
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Stat to Track"
                            aria-label="Stat to Track"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-dark">delete</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Stat to Track"
                            aria-label="Stat to Track"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-dark">delete</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Stat to Track"
                            aria-label="Stat to Track"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-dark">delete</Button>
                        </InputGroup.Append>
                    </InputGroup>

                </Col>



                <Col md={{ span: 5, offset: 2 }} className="rightDiv">
                    <h1>Stats to Track</h1>
                    <br />
                    <Button variant="dark" block className="right test" onClick={addStat}>Add Stat</Button>

                </Col>
            </Row>

            <br />
        </Container>
    )
};

export default StatCard;