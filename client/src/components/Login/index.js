import React from 'react';

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