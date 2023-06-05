import React, {FC} from 'react';
import TableComponent from "../tableComponent/tableComponent";
import {ITablePriceData} from "../../common/types/assets/iAssets";


const TopPrice: FC<ITablePriceData> = ({assets}: ITablePriceData): JSX.Element => {
    return (
        <TableComponent assets={assets}/>
    );
};

export default TopPrice;