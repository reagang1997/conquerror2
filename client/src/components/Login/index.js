import React from 'react';
import "./style.css"

function Login(){
    return(
        <div>
            <input placeholder='username'/>
            <input placeholder='password' type='password'/>
            <button className='btn'>Login</button>
        </div>
    )
}

export default Login;