import React from 'react';
import "./style.css"

function Search({search, setSearch}){
    return(
        <input placeholder="Search Championships!" onChange={(e) => setSearch({champName: e.target.value})}></input>
    )
}

export default Search;