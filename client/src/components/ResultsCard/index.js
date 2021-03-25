import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import Reactable from "reactable";
import axios from 'axios';
import './style.css';

const ResultsCard = ({ champID }) => {

    const [players, setPlayers] = useState([]);
    const [cols, setCols] = useState([]);
    const [update, setUpdate] = useState(0);
    const [keyStat, setKeyStat] = useState({
        keyStatName: '',
        keyStatValue: ''
    });

    const Table = Reactable.Table;
    const Tr = Reactable.Tr;
    const Td = Reactable.Td;
    useEffect(async () => {
        const foundChamp = await axios.get(`/api/champ/${champID}`);
        setKeyStat({ keyStatName: foundChamp.data.keyStat, keyStatValue: foundChamp.data.keyStatValue })
        console.log(foundChamp.data);
        setPlayers(foundChamp.data.players);
        getTeamStats();
        // createCol();
    }, [])

    const getTeamStats = async () => {
        let teams = await axios.get(`/api/populatedChampTeams/${champID}`);
        teams = teams.data.teams;
        console.log(teams.players);
        let stats = teams[0].players[0].stats.map(stat => stat.statName);
        console.log(stats);
        let tmpStats = [];
        teams.forEach(team => {
            let tmpTeam = {
                teamName: team.teamName,
                stats: []
            };
            stats.forEach(stat => {
                let tmpStat = {
                    statName: stat,
                    value: 0
                };
                tmpTeam.stats.push(tmpStat)
            })
            tmpStats.push(tmpTeam);
        });
        console.log(tmpStats);

        teams.forEach(team => {
            
        })

    }

    return (
        <Container>
            <br />
            <Row>
                <Col className="mainDiv">
                    <h1>Results</h1>
                    {players ?
                        <Table className='table' id='table' sortable={true}>
                            {players.map(player => {
                                return (
                                    <Tr>
                                        <Td column="Player Name" data={player.playerName}>
                                            <b>{player.playerName}</b>
                                        </Td>
                                        {player.stats.map(stat => {
                                            return (

                                                <Td column={stat.statName} data={stat.value}>
                                                    {stat.value}
                                                </Td>
                                            )
                                        })}
                                    </Tr>

                                )
                            })}</Table> : <div></div>}
                    {/* <Table className="table" sortable={true} data={[
                        { PlayerName: 'Jose', Kills: 3, Deaths: 42, Headshots: 0 },
                        { PlayerName: 'Angel', Kills: 30, Deaths: 3, Headshots: 10 },
                        { PlayerName: 'Dave', Kills: 22, Deaths: 5, Headshots: 9 },
                        { PlayerName: 'Reagan', Kills: 35, Deaths: 1, Headshots: 11 },
                    ]} /> */}
                </Col>
            </Row>
            <br />
            {/* <Row>
                <Col className='testTable'>
                    <h1>REACT-TABLE RESULTS</h1>
                    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th
                                            {...column.getHeaderProps()}
                                            style={{
                                                borderBottom: 'solid 3px red',
                                                background: 'aliceblue',
                                                color: 'black',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {column.render('Header')}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map(row => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return (
                                                <td
                                                    {...cell.getCellProps()}
                                                    style={{
                                                        padding: '10px',
                                                        border: 'solid 1px gray',
                                                        background: 'papayawhip',
                                                    }}
                                                >
                                                    {cell.render('Cell')}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </Col>
            </Row> */}

        </Container>
    );
};

export default ResultsCard;