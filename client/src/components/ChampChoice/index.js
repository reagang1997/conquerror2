import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import './style.css';

import axios from 'axios';


const ChampChoice = ({ champName, id, flag }) => {

    const history = useHistory();

    const [champID, setChampID] = useState('');

    const handleClick = (e) => {
        history.push(`/addResults/${e.target.id}`);
    }


    return (
        <div className="container">
            <div className="row champDiv">
                <span className="col-8 champName">{champName}</span>
                {flag ?
                    <div className='col-4' id='weirdCol'><button className="col-6 resultLink" href="#" id={id} onClick={handleClick}>Add Results</button>
                        <button className="col-6 editLink" href="#">Edit</button></div>
                    : <button className="col-4 editLink" href="#">View Result</button>}
            </div>
        </div>
    )
};

export default ChampChoice;