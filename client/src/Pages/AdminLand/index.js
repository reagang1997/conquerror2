import React, { useState, useEffect } from 'react';
import './style.css';
import Champ from '../../components/ChampChoice';
import AddChampBtn from '../../components/AddChampBtn';
import axios from 'axios';
import DemoCard from '../../components/DemoCard';
import NewDemoCard from '../../components/NewDemoCardlol';

function AdminLand() {

    const [user, setUser] = useState({
        username: '',
        email: '',
        id: ''
    });

    const [champ, setChamp] = useState('');

    useEffect(() => {
        getUser();
    }, [])

    const getUser = () => {
        axios.get('/api/user')
            .then(tmpuser => {
                tmpuser = tmpuser.data;
                // setUser({ id: tmpuser._id });
                // console.log(user);

                axios.get(`/api/userChamps/${tmpuser._id}`)
                    .then(tmpchamp => {
                        tmpchamp = tmpchamp.data[0].champName
                        console.log(tmpchamp);
                        setChamp(tmpchamp)
                        console.log(champ)
                    })
            })


    }

    return (
        <div>
            <br/>
            <Champ champName={champ} />
            <AddChampBtn />
            <NewDemoCard />
        </div>
    );
};

export default AdminLand;