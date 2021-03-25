import React from 'react';
import { Container } from 'react-bootstrap';
import './style.css';

const AddChampHead = () => {
    return (
        <Container>
            <div className="title shadow" id='noWrap'>
                <h1 id='create-champ'>Create A Championship To Get Started!</h1>
            </div>
        </Container>
    );
};

export default AddChampHead;