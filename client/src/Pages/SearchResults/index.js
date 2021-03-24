import React, {useState, useEffect} from 'react';
import Champ from '../../components/ChampChoice';
import Search from '../../components/Search';
import { useHistory } from "react-router-dom";

import './style.css';
import axios from 'axios';
import { set } from 'mongoose';

function SearchResults({search, setSearch}) {
    const history = useHistory();

    const [searchResults, setSearchResults] = useState([]);

    useEffect(async () => {
        console.log('hitting results');
        const tmpResults = await axios.get(`/api/champs/${search.champName}`);
        setSearchResults(tmpResults.data);
        console.log(searchResults);
    }, [search])
    
    return (
        <div className='container'>
            <br />
            <div className='center' >
                <Search className='center' search={search} setSearch={setSearch}/>
                <div className='button'>
                    <button className="btn btn-dark" id="hmBtn">Search</button>
                </div>
            </div>
            <br />
            {searchResults ? searchResults.map(result => <Champ champName={result.champName} />) : <div></div>}
        </div>
    );
};

export default SearchResults;