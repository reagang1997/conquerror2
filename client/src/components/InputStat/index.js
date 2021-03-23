import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';


const InputStat = ({name, flag, stats, players, teams, setStats, setPlayers, setTeams}) => {

    const deleteItem = () => {

        const target = document.getElementById({name});

        if(flag === 'stat'){
            // look through stats array and spice out traget
            const spliced = stats.map((stat => {
                if(stat.name !== target){
                    return(stat)
                } 
            }))
            setStats(spliced);
        } 
        else if (flag === 'team'){
            // look through teams array and spice out traget
            const spliced = teams.map((team => {
                if(team.name !== target){
                    return(team)
                } 
            }))
            setTeams(spliced);
        }
        else{
            // look through players array and spice out traget
            const spliced = players.map((player => {
                if(player.name !== target){
                    return(player)
                } 
            }))
            setPlayers(spliced);
        }
    }

    return (
        <div className='mb-3 input-group'>
            <h3 className='form-control' id={name}>{name}</h3>
            <div className='input-group-append'>
                <button type='button' className='btn btn-outline-danger' onClick={deleteItem}>delete</button>
            </div>
        </div>
    );
};

export default InputStat;