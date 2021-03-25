import React, { useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Redirect, useHistory } from "react-router-dom";
import axios from 'axios';
import Image from '../../assets/jose.jpg';
import gif1 from '../../assets/ChampGif2.gif';
import PlayerCard from '../../components/PlayerCard/index';

import AddChampBtn from '../../components/AddChampBtn/index';

import Search from '../../components/Search'
import { Button } from 'react-bootstrap';

import TeamCard from '../../components/TeamCard/index';
import NewDemoCard from '../../components/NewDemoCardlol';



function Home({ search, setSearch }) {

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
        <div className="container">


            <div className="row example">

                <div className="col-md-6 jumbotron" id="adjJumbo">
                    <h1 className="display-4 center">Welcome to Championship Tracker!</h1>
                    <div className="container example">
                        <img src={gif1} alt="gif of making champ" className="exampleImg" style={{'width': '400px', 'height': '203px'}}/>
                    </div>

                </div>

                <div className="col-md-4 ">
                    <div className="row">
                        <div className="col jumbotron" id="adjJumbo">
                            <div className="row justify-content-center text">
                                <h1 className="display-4">Search</h1>
                            </div>
                            <div className='row justify-content-center' >
                                <Search className='center' search={search} setSearch={setSearch} />
                            </div>
                            <div className='row justify-content-center'>
                                <button className="btn btn-dark" id="hmBtn" onClick={(e) => { history.push('/searchResults'); console.log(search) }}>Search</button>
                            </div>
                            <div className="row justify-content-center text">
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
                                <button className="btn btn-dark" onClick={createUser}>Login</button>
                                {user.stats === 200 ? <Redirect to='/adminHome' /> : console.log('not logged in')}
                            </div>
                        </div>
                    </div>
                   
                </div>

            </div>




        </div>
    )
}

export default Home;