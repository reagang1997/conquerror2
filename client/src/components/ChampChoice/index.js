import React, {useEffect, useState} from "react";
import './style.css';
import axios from 'axios';


const ChampChoice = ({champName}) => {

    

    return (
        <div className="container">
            <div className="row champDiv">
                <span className="col-8 champName">{champName}</span>
                <a className="col-2 resultLink" href="#">Add Results</a>
                <a className="col-2 editLink" href="#">Edit</a>
            </div>
        </div>
    )
};

export default ChampChoice;