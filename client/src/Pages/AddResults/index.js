import React from 'react';
import ResultsCard from '../../components/ResultsCard';
import SaveBtn from '../../components/SaveBtn';
import './style.css';

function AddResults() {
    return (
        <div>
            <ResultsCard />
            <SaveBtn />
        </div>
    );
};

export default AddResults;