
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, useHistory } from "react-router-dom";

import axios from 'axios';


function Login({ setLoggedIn }) {

    const history = useHistory();

    const [user, setUser] = useState({
        email: '',
        password: '',
        status: 0
    });

    const loginUser = async () => {

        const loggedInUser = await axios.post('/login', user);
        if (loggedInUser.status === 200) {
            setLoggedIn(true);
            history.push('/adminHome');
        }
        setUser({ ...user, status: loggedInUser.status });

    }

    return (

        <div>
            <input id='email' placeholder='Email' onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <input id='password' placeholder='Password' type='password' onChange={(e) => setUser({ ...user, password: e.target.value })} />
            <button className='btn btn-outline-dark' style={{'border': 'none'}} onClick={loginUser}>Login</button>
        </div>
    )
}

export default Login;