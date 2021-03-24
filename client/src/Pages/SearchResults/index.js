import React from 'react';
import Champ from '../../components/ChampChoice';
import Search from '../../components/Search';
import './style.css';

function SearchResults({search, setSearch}) {
    return (
<<<<<<< HEAD
        <div>
            <h1>{search}</h1>
            <h2>Insert some components here</h2>
=======
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
>>>>>>> 3f4d0cf230afcf3d29a6c524d9839f80ecf1a749
        </div>
    );
};

export default SearchResults;