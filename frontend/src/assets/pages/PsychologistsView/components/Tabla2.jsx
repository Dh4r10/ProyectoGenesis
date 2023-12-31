import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function Tabla2() {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }
    const rows = [
        createData('GIUSES', 159, 6.0, 24, 4.0),
        createData('I22h', 237, 9.0, 37, 4.3),
        createData('Ec22lair', 262, 16.0, 24, 6.0),
        createData('C22upcake', 305, 3.7, 67, 4.3),
        createData('2', 356, 16.0, 49, 3.9),
        createData('mar2222co2', 356, 16.0, 49, 3.9),
        createData('mar22co34', 356, 16.0, 49, 3.9),
        createData('22', 356, 16.0, 49, 3.9),
        createData('G22ingasgerbread', 356, 16.0, 49, 3.9),
        createData('2', 356, 16.0, 49, 3.9),
        createData('2', 356, 16.0, 49, 3.9),
        
    ];

    return (
        <div className='px-3 py-2 bg-white rounded shadow mt-3'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
