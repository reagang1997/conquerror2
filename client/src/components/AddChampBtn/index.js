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
    }

    const createChamp = async (e) => {
        const tmp = {
            champName: 'xxxxxxxxxxxxxxxxxxxxxxxx',
            stats: [],
            players: [],
            teams: [],
            admin: [],
            keyStat: '',
            keyStatValue: ''
        }
        const newChamp = await axios.post('/api/createChamp', tmp);

        setTmpChamp(newChamp.data._id)
        
        addAdmin();
    }

    const addAdmin = async () => {
        const addAdmin = `/api/addAdmin/${user._id}/xxxxxxxxxxxxxxxxxxxxxxxx`;
        const updatedAdmins = await axios.put(`/api/addAdmin/${user._id}/xxxxxxxxxxxxxxxxxxxxxxxx`);
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