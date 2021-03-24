import React, { useState, useEffect } from 'react';
import './style.css';
import Champ from '../../components/ChampChoice';
import AddChampBtn from '../../components/AddChampBtn';
import axios from 'axios';
import DemoCard from '../../components/DemoCard';
import NewDemoCard from '../../components/NewDemoCardlol';
import ResultsCard from '../../components/ResultsCard';

function AdminLand() {

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
        // userChamps.data.forEach(champ => {
        //     setChamps({...champs, champ});
        //     console.log(champ);
        // })

        console.log(champs);


    }

    return (
        <div>
            <br/>

            {champs.map(c => {
<<<<<<< HEAD
                return <Champ champName={c.champName} id={c._id} flag='admin'/>
=======
                return <Champ flag='admin' champName={c.champName} id={c._id}/>
>>>>>>> 3f4d0cf230afcf3d29a6c524d9839f80ecf1a749
            })}
            {/* <Champ champName={champ} /> */}
            <AddChampBtn />
        </div>
    );
};

export default AdminLand;