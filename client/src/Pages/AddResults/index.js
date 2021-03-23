import React from 'react';
import ResultsCard from '../../components/ResultsCard';
import NewResults from '../../components/NewResultCardAttemptlol';
import SaveBtn from '../../components/SaveBtn';
import PrevNxt from '../../components/NextPrevSave';
import './style.css';

function AddResults() {
    return (
        <div>
            <br />
            <div className="title shadow">
                <h1 id={'create-champ'}>Update Results</h1>
            </div>
            <NewResults />
            {/* <ResultsCard /> */}
            <br />
            <PrevNxt />
            {/* <SaveBtn /> */}
        </div>
    );
};

export default AddResults;