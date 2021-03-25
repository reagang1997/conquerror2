import React, {useState, useEffect} from 'react';
import Champ from '../../components/ChampChoice';
import Search from '../../components/Search';
import { useHistory } from "react-router-dom";

import './style.css';
import axios from 'axios';
import { set } from 'mongoose';

function SearchResults({search, setSearch, champID, setChampID}) {
    const history = useHistory();

    const [searchResults, setSearchResults] = useState([]);

    useEffect(async () => {
        const tmpResults = await axios.get(`/api/champs/${search.champName}`);
        setSearchResults(tmpResults.data);
    }, [search])
    
    return (
        <div className='container'>
            <br />
            <div className='center' >
                <Search className='center' search={search} setSearch={setSearch}/>
            </div>
            <br />
            {searchResults ? searchResults.map(result => <Champ champName={result.champName} champID={champID} setChampID={setChampID}/>) : <div></div>}
        </div>
    );
};

export default SearchResults;