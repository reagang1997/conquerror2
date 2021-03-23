import React from "react";
import "./style.css";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router";

const SaveBtn = () => {
    const history = useHistory();
    return (
        <div className="container">
            <Button variant="dark" block className="saveBtn"
            onClick={(e) => history.push('/adminHome')}>Save</Button>
            <br />
        </div>
    );
};

export default SaveBtn;