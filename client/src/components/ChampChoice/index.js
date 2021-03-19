import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, useHistory} from 'react-router-dom';
import './style.css';

import axios from 'axios';


const ChampChoice = ({champName}) => {

    const history = useHistory();

    return (
        <div className="container">
            <div className="row champDiv">
                <span className="col-8 champName">{champName}</span>
                <button className="col-2 resultLink" href="#" onClick={(e) => {history.push('/addResults')}}>Add Results</button>
                <button className="col-2 editLink" href="#">Edit</button>
            </div>
        </div>
    )
};

export default ChampChoice;