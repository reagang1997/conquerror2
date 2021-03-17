
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import axios from 'axios';


function Login(){

    const [user, setUser] = useState({
        email: '',
        password: '',
        status: 0
    });

    const loginUser = async () => {

        const loggedInUser = await axios.post('/login', user);
        console.log(loggedInUser);
        if(loggedInUser.status === 200){
        }
        setUser({...user, status: loggedInUser.status});
        console.log(user);
        
    }

    return(
        <div>
            <input placeholder='username' onChange={(e) => setUser({...user, email: e.target.value})}/>
            <input placeholder='Password' type='password' onChange={(e) => setUser({...user, password: e.target.value})}/>
            <button className='btn' onClick={loginUser}>Login</button>
            {user.stats === 200 ? <Redirect to='/adminHome'/> : console.log('not logged in')}
        </div>
    )
}

export default Login;