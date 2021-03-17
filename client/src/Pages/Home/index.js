import React from 'react';
import './style.css';
import Champ from "../../components/ChampChoice/ChampChoice";

function Home() {
    return (
        <div class="jumbotron">
            <h1 class="display-4">Welcome to Conquerror!</h1>
            <img src="https://via.placeholder.com/400" alt="gif of making champ"/>
            <Champ />
        </div>
    )
}

export default Home;