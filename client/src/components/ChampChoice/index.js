import React from "react";
import './style.css';


const ChampChoice = () => {
    return (
        <div className="container">
            <div className="row champDiv">
                <span className="col-8 champName">Champ 1 Example</span>
                <a className="col-2 resultLink" href="#">Add Results</a>
                <a className="col-2 editLink" href="#">Edit</a>
            </div>
        </div>
    )
};

export default ChampChoice;