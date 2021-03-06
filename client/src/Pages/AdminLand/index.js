import React, { useState, useEffect } from 'react';
import './style.css';
import Champ from '../../components/ChampChoice';
import AddChampBtn from '../../components/AddChampBtn';
import AddChampHead from '../../components/PromptAddChamp';
import axios from 'axios';


function AdminLand({champID, setChampID}) {

    const [user, setUser] = useState({
        username: '',
        email: '',
        id: ''
    });


    const [champs, setChamps] = useState([]);

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        const user = await axios.get('/api/user');

        const userChamps = await axios.get(`/api/userChamps/${user.data._id}`);

        setChamps(userChamps.data)



    }

    return (
        <div>
            <br/>
            {champs.length > 0 ? champs.map(c => {
                return <Champ flag='admin' champName={c.champName} id={c._id} champID={champID} setChampID={setChampID}/>
            }) : <AddChampHead /> }
            
        
            <AddChampBtn />
        </div>
    );
};

export default AdminLand;