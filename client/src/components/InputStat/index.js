import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';


const InputStat = ({name, id,  flag, stats, players, teams, setStats, setPlayers, setTeams, champID, setChampID, update, setUpdate}) => {

    const [idToDelete, setId] = useState({_id: ''});

    useEffect(() => {
        setId({_id: id});
    }, [])

    const handleDelete = async (e) => {
        console.log(flag);
        switch (flag){
            case 'stat': {
                const newStats = await axios.get(`/api/stats/${idToDelete._id}/${champID}`);
                setStats(newStats.data.stats);
                console.log(newStats.data)
                setUpdate(update + 1)
                break;
            }
            case 'team': {
                const newTeams = await axios.get(`/api/teams/${idToDelete._id}/${champID}`);
                setTeams(newTeams.data.teams);
                setUpdate(update+1);
                break;
            }
            case 'player': {
                const newPlayers = await axios.get(`/api/players/${idToDelete._id}/${champID}`);
                setPlayers(newPlayers.data.players)
                setUpdate(update+1);
                break;
            }
        }
    }
    return (
        <div className='mb-3 input-group'>
            <h3 className='form-control' id={id}>{name}</h3>
            <div className='input-group-append'>
                <button type='button' className='btn btn-outline-danger' onClick={handleDelete} >delete</button>
            </div>
        </div>
    );
};

export default InputStat;