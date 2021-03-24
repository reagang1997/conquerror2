import React from 'react';
import Champ from '../../components/ChampChoice';
import './style.css';

function SearchResults() {
    return (
        <div>
            <h1>Search Results Page</h1>
            <h2>Insert some components here</h2>
            <div className='container'>
                <div className='center' >
                    <Search className='center' />
                    <div className='button'>
                        <button className="btn btn-dark" id="hmBtn">Search</button>
                    </div>
                </div>
                <br />
                <Champ />
            </div>
            <Champ />
        </div>
    );
};

export default SearchResults;