import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';


const InputStat = ({name}) => {
    return (
        <div class='mb-3 input-group'>
            <h3 aria-descibedby='basic-addon2' class='form-control'>{name}</h3>
            <div class='input-group-append'>
                <button type='button' class='btn btn-outline-danger'>delete</button>
            </div>
        </div>
    );
};

export default InputStat;