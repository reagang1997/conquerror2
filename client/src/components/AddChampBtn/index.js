import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Redirect, useHistory } from "react-router-dom";

import './style.css';


const NewChampBtn = () => {

    const history = useHistory();

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4 newChamp">
                    <button className="addChampBtn" onClick={(e) => {
                        history.push('/createChampionship');
                    }}>Add New Champ</button>
                </div>
            </div>
        </div>
    )
};

export default NewChampBtn;