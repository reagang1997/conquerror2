import React from "react";
import "./style.css";
import { Button } from 'react-bootstrap';

const SaveBtn = () => {
    return (
        <div className="container">
            <Button variant="dark" block className="saveBtn">Save</Button>
            <br />
        </div>
    );
};

export default SaveBtn;