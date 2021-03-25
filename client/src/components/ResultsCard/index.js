import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import Reactable from "reactable";
import axios from 'axios';
import './style.css';

const ResultsCard = ({ champID }) => {

    const [players, setPlayers] = useState([]);
    const [cols, setCols] = useState([]);
    const [update, setUpdate] = useState(0);

    const Table = Reactable.Table;
    const Tr = Reactable.Tr;
    const Td = Reactable.Td;
    useEffect(async () => {
        const foundChamp = await axios.get(`/api/champ/${champID}`);
        console.log(foundChamp.data);
        setPlayers(foundChamp.data.players);
        // createCol();
    }, [cols])
    //--------------------------------------REACT-TABLE----------------------------------------------------
    // const data = React.useMemo(
    //     () =>
    //         //     const tmp1 = players.map(player => {
    //         //         const tmpObj1 = {
    //         //             col1: player.playerName,
    //         //             col2: 
    //         //         }
    //         //     });

    //         [
    //             {
    //                 col1: 'Jose',
    //                 col2: 3,
    //                 col3: 42,
    //                 col4: 0,
    //             },
    //             {
    //                 col1: 'Angel',
    //                 col2: 30,
    //                 col3: 3,
    //                 col4: 10,
    //             },
    //             {
    //                 col1: 'Dave',
    //                 col2: 22,
    //                 col3: 5,
    //                 col4: 9,
    //             },
    //             {
    //                 col1: 'Reagan',
    //                 col2: 35,
    //                 col3: 1,
    //                 col4: 11,
    //             },
    //         ],
    //     []

    // )

    // const createCol = () => {

    //     if (players) {
    //         console.log(players[0]);
    //         let tmpCol = {
    //             Header: 'PlayerName',
    //             accessor: 'col1',
    //         }

    //         let tmpcols = [];
    //         tmpcols.push(tmpCol);
    //         players[0].stats.forEach((stat, i) => {
    //             tmpCol.Header = stat.statName;
    //             tmpCol.accessor = 'col' + (i + 2);
    //             tmpcols.push(tmpCol);
    //         })
    //         console.log(tmpcols);
    //         setCols(tmpcols);
    //     }

    //     if (update === 0) {
    //         setUpdate(update + 1);
    //     }
    // }

    // const columns = React.useMemo(

    //     () => cols, []


    // [
    //     {
    //         Header: 'PlayerName',
    //         accessor: 'col1', // accessor is the "key" in the data
    //     },
    //     {
    //         Header: 'Kills',
    //         accessor: 'col2',
    //     },
    //     {
    //         Header: 'Deaths',
    //         accessor: 'col3',
    //     },
    //     {
    //         Header: 'Headshots',
    //         accessor: 'col4',
    //     },
    // ],

    // )

    // const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     rows,
    //     prepareRow,
    // } = useTable({ columns, data })
    //--------------------------------------REACT-TABLE----------------------------------------------------

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