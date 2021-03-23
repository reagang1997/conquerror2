import axios from "axios";
import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Redirect, useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';

import './style.css';


const NewChampBtn = () => {

    const [user, setUser] = useState({});

    const [tmpChamp, setTmpChamp] = useState({
    });


    useEffect(() => {
        getUser();
    }, [])

    const history = useHistory();

    const getUser = async () => {
        const user = await axios.get('/api/user');
        const userData = user.data
        setUser(userData);
        console.log(userData);
    }

    const createChamp = async (e) => {
        console.log('hit');
        const tmp = {
            champName: 'xxxxxxxxxxxxxxxxxxxxxxxx',
            stats: [],
            players: [],
            teams: [],
            admin: []
        }
        const newChamp = await axios.post('/api/createChamp', tmp);

        setTmpChamp(newChamp.data._id)
        
        addAdmin();
    }

    const addAdmin = async () => {
        const addAdmin = `/api/addAdmin/${user._id}/xxxxxxxxxxxxxxxxxxxxxxxx`;
        console.log(addAdmin);
        const updatedAdmins = await axios.put(`/api/addAdmin/${user._id}/xxxxxxxxxxxxxxxxxxxxxxxx`);
        console.log(updatedAdmins);
        console.log(tmpChamp)
        history.push(`/createChampionship/`);

    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4 newChamp">
                    <button className="btn btn-dark addChampBtn" onClick={() => createChamp()}>Add New Champ</button>
                </div>
            </div>
        </div>
    )
};

export default NewChampBtn;