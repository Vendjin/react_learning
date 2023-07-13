import React, {FC} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {TableCellColored, TableContainerBlock} from "./styles";
import {ISingleAsset, ITablePriceData} from "../../common/types/assets/iAssets";


const TableComponent: FC<ITablePriceData> = ({assets}: ITablePriceData): JSX.Element => {
    return (
        <TableContainerBlock>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Название</TableCell>
                        <TableCell align="right">Цена</TableCell>
                        <TableCell align="right">Изменения (%)</TableCell>
                        <TableCell align="right">Изменения ($)</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {assets.map((element: ISingleAsset) => (
                        <TableRow
                            key={element.name}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">{element.name}</TableCell>
                            <TableCell align="right">{element.current_price}</TableCell>
                            <TableCellColored align="right"
                                              className={element.price_change_percentage_24h > 0
                                                  ? 'positive'
                                                  : 'negative'}>
                                {element.price_change_percentage_24h.toFixed(2)}
                            </TableCellColored>
                            <TableCellColored align="right"
                                              className={element.price_change_24h > 0
                                                  ? 'positive'
                                                  : 'negative'}>
                                {element.price_change_24h.toFixed(2)}
                            </TableCellColored>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </TableContainerBlock>
    );
};

export default TableComponent;