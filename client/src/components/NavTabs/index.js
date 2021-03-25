import React from 'react';
import { Link, useHistory } from "react-router-dom";
import Search from '../Search';
import Login from '../Login';
import { Button } from 'react-bootstrap';

import "./style.css"


function NavTabs({ isLoggedIn, setLoggedIn }) {

    const history = useHistory();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="/">Championship Tracker</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    </li>
                    <li className="nav-item">
                        {isLoggedIn ? <div><Button onClick={(e) => history.push('/adminHome')}>Admin Home</Button>
                        <Button onClick={(e) => history.push('/searchResults')}>Search For Championship</Button> </div>: <Login setLoggedIn={setLoggedIn}></Login>}
                    </li>
                    <li className="nav-item">

                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default NavTabs;
