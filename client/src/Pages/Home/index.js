import React, { useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Redirect, useHistory } from "react-router-dom";
import axios from 'axios';

import PlayerCard from '../../components/PlayerCard/index';

import AddChampBtn from '../../components/AddChampBtn/index';

import Search from '../../components/Search'
import { Button } from 'react-bootstrap';

import TeamCard from '../../components/TeamCard/index';
import NewDemoCard from '../../components/NewDemoCardlol';



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
        <div>


            <div className="row">

                <div className="col-7 jumbotron">
                    <h1 className="display-4 center">Welcome to Conquerror!</h1>
                    <img src="https://via.placeholder.com/400" alt="gif of making champ" className=""/>
                    <div className='center' >
                        <Search className='center' />
                        <div className='button'>
                            <Button>Search</Button>
                        </div>
                    </div>
                </div>

                <div className="col-3 ">
                    <div className="row">
                        <div className="col jumbotron">
                            <div className="row justify-content-center">
                                <h1 className="display-4">Sign Up</h1>
                            </div>
                            <div className="row justify-content-center">
                                <input placeholder='email' onChange={(e) => setUser({ ...user, email: e.target.value })}></input>
                            </div>
                            <div className="row justify-content-center">
                                <input placeholder='username' onChange={(e) => setUser({ ...user, username: e.target.value })}></input>
                            </div>
                            <div className="row justify-content-center">
                                <input placeholder='password' type='password' onChange={(e) => setUser({ ...user, password: e.target.value })}></input>
                            </div>
                            <div className="row justify-content-center">
                                <button className="btn" onClick={createUser}>Login</button>
                                {user.stats === 200 ? <Redirect to='/adminHome' /> : console.log('not logged in')}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            
                        </div>

                    </div>
                </div>

            </div>




        </div>
    )
}

export default Home;