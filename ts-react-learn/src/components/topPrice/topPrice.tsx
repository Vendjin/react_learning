import React from 'react';
import TableComponent from "../tableComponent/tableComponent";


const TopPrice = ({assets}: any) => {
    return (
        <TableComponent assets={assets}/>
    );
};

export default TopPrice;