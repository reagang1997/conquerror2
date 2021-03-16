
import React, {useState} from 'react';
import axios from 'axios';


function Login(){

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const loginUser = async () => {

        const loggedInUser = await axios.post('/login', user);
        console.log(loggedInUser);

    }

    return(
        <div>
            <input placeholder='username' onChange={(e) => setUser({...user, email: e.target.value})}/>
            <input placeholder={user.email} type='password' onChange={(e) => setUser({...user, password: e.target.value})}/>
            <button className='btn' onClick={loginUser}>Login</button>
        </div>
    )
}

export default Login;