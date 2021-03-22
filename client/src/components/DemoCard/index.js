import React from 'react';
import './style.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'

const DemoCard = () => {
    return (
        <div className="container">
            <br />
            <div className="row justify-content-between">
                <div className="col-5 leftDiv">
                    <h1>Demo Name 1</h1>
                    <ListGroup>
                            <ListGroup.Item>Cras justo odio<Button variant="danger" className="right">Delete</Button>{''}</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in<Button variant="danger" className="right">Delete</Button>{''}</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus<Button variant="danger" className="right">Delete</Button>{''}</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac<Button variant="danger" className="right">Delete</Button>{''}</ListGroup.Item>
                            
                        </ListGroup>
                </div>

                <div className="col-5 rightDiv">
                    <h1>Demo Name 2</h1>
                    <div className="row">
                        <div className="col-9"></div>
                        <div className="col-3">
                            <button className="addBtn">Add thing</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9"></div>
                        <div className="col-3">
                            <div class="dropdown">
                                <button class="dropbtn">Team</button>
                                <div class="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemoCard;