import React from 'react';
import Champ from '../../components/ChampChoice';
import Search from '../../components/Search';
import './style.css';

function SearchResults() {
    return (
        <div className='container'>
            <br />
            <div className='center' >
                <Search className='center' />
                <div className='button'>
                    <button className="btn btn-dark" id="hmBtn">Search</button>
                </div>
            </div>
            <br />
            <Champ/>
        </div>
    );
};

export default SearchResults;