import React, { useEffect, useState } from 'react';
import NewResults from '../../components/NewResultCardAttemptlol';
import PrevNxt from '../../components/NextPrevSave';
import './style.css';
import axios from 'axios';

function AddResults() {


    const [champ, setChamp] = useState({});

    const [players, setPlayers] = useState([])

    const [index, setIndex] = useState(0);

    const [results, setResults] = useState([]);

    const [tmpResult, setTmpResult] = useState([]);

    const [updatedCount, setUpdatedCount] = useState(0);

    useEffect(async () => {
        let url = window.location.href;
        url = url.split('/');
        const champID = url[url.length - 1];
        const champ = await axios.get(`/api/champ/${champID}`);
        console.log(champ.data);
        setChamp(champ.data);
        console.log(champ.data.players)
        setPlayers(champ.data.players);
        console.log(players)
        setResults(players)

    }, [])


    return (
        <div>
            <br />
            <div className="title shadow">
                <h1 id={'create-champ'}>Update Results</h1>
            </div>
            <NewResults 
            players={players} 
            index={index} 
            results={results} 
            setResults={setResults} 
            tmpResult={tmpResult} 
            setTmpResult={setTmpResult}
            
            />
            {/* <ResultsCard /> */}
            <br />
            <PrevNxt 
            index={index} 
            setIndex={setIndex} 
            players={players} 
            tmpResult={tmpResult} 
            setTmpResult={setTmpResult}
            updatedCount={updatedCount}
            setUpdatedCount={setUpdatedCount}
            />
            {/* <SaveBtn /> */}
        </div>
    );
};

export default AddResults;