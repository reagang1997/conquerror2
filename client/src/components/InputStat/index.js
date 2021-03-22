import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';


const InputStat = () => {
    return (
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Stat to Track"
                aria-label="Stat to Track"
                aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
                <Button variant="outline-dark">delete</Button>
            </InputGroup.Append>
        </InputGroup>
    );
};

export default InputStat;