import React, { useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Redirect, useHistory } from "react-router-dom";
import axios from 'axios';

function Home() {

    const history = useHistory();

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        status: 0
    });

    const createUser = async () => {

        const createdUser = await axios.post('/signup', user);
        const loggedInUser = await axios.post('/login', user);
        console.log(loggedInUser);
        if (loggedInUser.status === 200) {
            history.push('/adminHome');
        }
        setUser({ ...user, status: loggedInUser.status });
        console.log(user);

    }

    return (
        <div className="row">
            <div class="col-5 jumbotron">
                <h1 class="display-4">Welcome to Conquerror!</h1>
                <img src="https://via.placeholder.com/400" alt="gif of making champ" />
            </div>

            <div class="col-5 jumbotron">
                <div class="row">
                    <h1 class="display-4">Sign Up</h1>
                </div>
                <div class="row">
                    <input placeholder='email' onChange={(e) => setUser({ ...user, email: e.target.value })}></input>
                </div>
                <div class="row">
                    <input placeholder='username' onChange={(e) => setUser({ ...user, username: e.target.value })}></input>
                </div>
                <div class="row">
                    <input placeholder='password' type='password' onChange={(e) => setUser({ ...user, password: e.target.value })}></input>
                </div>
                <div class="row">
                    <button className="btn" onClick={createUser}>Login</button>
                    {user.stats === 200 ? <Redirect to='/adminHome' /> : console.log('not logged in')}
                </div>
            </div>
        </div>
    )
}

export default Home;