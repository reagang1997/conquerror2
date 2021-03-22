import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Redirect, useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';

import './style.css';


const NewChampBtn = () => {

    const history = useHistory();

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4 newChamp">
                    {/* <button className="addChampBtn" onClick={(e) => {
                        history.push('/createChampionship');
                    }}>Add New Champ</button> */}
                    <Button variant="dark" block className="saveBtn" onClick={(e) => {history.push('/createChampionship');}}>Add New Champ</Button>
                </div>
            </div>
        </div>
    )
};

export default NewChampBtn;