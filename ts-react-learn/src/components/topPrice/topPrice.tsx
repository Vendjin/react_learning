import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {TableContainerBlock} from "./styles";


const TopPrice = ({assets}: any) => {
    return (
        <TableContainerBlock>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Название</TableCell>
                        <TableCell align="right">Цена</TableCell>
                        <TableCell align="right">Изменения (%)</TableCell>
                        <TableCell align="right">Изменения ($)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {assets.map((element: any) => (
                        <TableRow
                            key={element.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{element.name}</TableCell>
                            <TableCell align="right">{element.current_price}</TableCell>
                            <TableCell align="right">{element.price_change_24h.toFixed(2)}</TableCell>
                            <TableCell align="right">{element.price_change_percentage_24h.toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainerBlock>
    );
};

export default TopPrice;