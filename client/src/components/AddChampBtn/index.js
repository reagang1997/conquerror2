import React, { useEffect, useState } from "react";
import './style.css';


const NewChampBtn = () => {



    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4 newChamp">
                    <button className="addChampBtn">Add New Champ</button>
                </div>
            </div>
        </div>
    )
};

export default NewChampBtn;