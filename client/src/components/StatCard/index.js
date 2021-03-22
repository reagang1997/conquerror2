
import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Form, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap';
import InputStat from '../../components/InputStat';
import './style.css';



const StatCard = ({stats, setStats}) => {

    const [tmpStat, setTmpStat] = useState({
        name: ""
    });

    useEffect(() => {
        console.log(tmpStat);
    }, [tmpStat])

    let addStat = (e) => {

        const stat = document.getElementsByClassName('stat');

        console.log(stat);
        console.log('I am being clicked');
    
    }


    return (
        <Container>
            <br />
            <Row>

                <Col md={5} className="leftDiv shadow" id='appendBlankStat'>
                    <h1>Current Tracking Stats</h1>
                    <br />
                    {stats.map(stat => {
                        return(
                            <InputStat name={stat.name}/>
                        );
                    })}

                </Col>



                <Col md={{ span: 5, offset: 2 }} className="rightDiv shadow">
                    <h1>Stats to Track</h1>
                    <br />
                    <InputGroup className="mb-3">
                        <FormControl className='stat'
                        id='stat'
                            placeholder="Stat to Track"
                            aria-label="Stat to Track"
                            aria-describedby="basic-addon2"
                            value={tmpStat.name}
                            onChange={e => setTmpStat({name: e.target.value})}
                        />
                    </InputGroup>

                    <Button variant="dark" block className="right test" onClick={(e) => 
                    {   
                        e.preventDefault();
                        setStats([...stats, tmpStat]);
                        setTmpStat({name: ""});
                        console.log(stats);
                        console.log(tmpStat);
                        document.getElementById('stat').value = "";
                        }}>Add Stat</Button>

                </Col>
            </Row>

            <br />
        </Container>
    )
};

export default StatCard;