import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {getWatchList} from "../../store/thunks/watchList/wathcListThunk";
import {getTopPriceData} from "../../store/thunks/assets/assetsThunk";
import TableComponent from "../../components/tableComponent/tableComponent";
import { MainBox } from '../../components/mainBox/mainBox';
import {Typography} from "@mui/material";

const WatchList = () => {
    const dispatch = useAppDispatch()
    const watchList = useAppSelector(state => state.watchList.watchList)
    const assets = useAppSelector(state => state.assets.assets)

    useEffect(() => {
        dispatch(getTopPriceData())
        dispatch(getWatchList())
    }, [dispatch])

    const filteredArray = assets.filter((element: any) => {
        return watchList.some((otherElement: any) => {
            return otherElement.assetId === element.id
        })
    })

    console.log(filteredArray)
    return (
        <MainBox>
            <Typography variant={'h2'}>Избранное</Typography>
            <TableComponent assets={filteredArray}/>
        </MainBox>

    );
};

export default WatchList;