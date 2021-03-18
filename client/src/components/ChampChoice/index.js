import React, {useEffect, useState} from "react";
import './style.css';
import axios from 'axios';


const ChampChoice = ({champName}) => {

    

    return (
        <div className="container">
            <div className="row champDiv">
                <span className="col-8 champName">{champName}</span>
                <button className="col-2 resultLink" href="#">Add Results</button>
                <button className="col-2 editLink" href="#">Edit</button>
            </div>
        </div>
    )
};

export default ChampChoice;