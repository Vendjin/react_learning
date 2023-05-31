import {Avatar, Box, Button, Grid, Typography} from '@mui/material';
import React, {FC} from 'react';

import {useNavigate, useParams} from "react-router-dom";
import {ISingleAsset} from "../../common/types/assets/iAssets";
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {CardBox, CardItem, PriceColored} from './styles';
import {createWatchListRecord} from "../../store/thunks/assets/assetsThunk";


const SingleAssetPage: FC = (): JSX.Element => {
    const navigate = useNavigate();
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const assetsArray: ISingleAsset[] = useAppSelector(state => state.assets.assets);
    // as string помогает избавиться от ошибки если нет id
    const asset = assetsArray.find(element => element.name === id as string);
    console.log(asset)
    const handleCreateRecord = () => {
        const data = {
            name: '',
            assetId: ''
        }
        if (asset) {
            data.name = asset.name
            data.assetId = asset.id
        }
        dispatch(createWatchListRecord(data))
    }

    return (
        <>
            {asset && (
                <Grid container spacing={2} sx={{padding: 5, alignItems: 'center'}}>
                    <Grid item xs={12}>
                        <Typography variant={'h1'}
                                    sx={{display: 'flex', justifyContent: 'center'}}
                        >
                            {asset.name}
                        </Typography>
                    </Grid>
                    <CardBox item sm={6} xs={12}>
                        <CardItem>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                                <Avatar src={asset.image}/>
                                <Typography variant='h2' fontSize={20}
                                            fontWeight={'bold'}
                                >
                                    {asset.symbol.toUpperCase()}
                                </Typography>
                            </Box>
                        </CardItem>
                    </CardBox>
                    <CardBox item sm={6} xs={12}>
                        <CardItem>
                            <Typography variant='h2'>Цена: ${asset.current_price}</Typography>
                        </CardItem>
                    </CardBox>

                    <CardBox item sm={6} xs={12}>
                        <CardItem>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                                <Typography variant='h2'>Изменение цены:</Typography>
                                <PriceColored variant='h2' className={
                                    asset.price_change_24h >= 0
                                        ? 'positive'
                                        : 'negative'
                                }>
                                    ${asset.price_change_24h.toFixed(2)}
                                </PriceColored>
                            </Box>
                        </CardItem>
                    </CardBox>
                    <CardBox item sm={6} xs={12}>
                        <CardItem>
                            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                                <Typography variant='h2'>Изменение цены:</Typography>
                                <PriceColored variant='h2' className={
                                    asset.price_change_percentage_24h >= 0
                                        ? 'positive'
                                        : 'negative'
                                }>
                                    %{asset.price_change_percentage_24h.toFixed(2)}
                                </PriceColored>
                            </Box>
                        </CardItem>
                    </CardBox>

                    <Grid container justifyContent={'center'} marginTop={5} gap={1}>
                        <Button color="success"
                                variant="outlined"
                                sx={{width: 200}}
                                onClick={() => navigate(-1)}
                        >
                            Назад
                        </Button>
                        <Button color="success"
                                variant="outlined"
                                sx={{width: 200}}
                                onClick={handleCreateRecord}
                        >
                            Добавить в избраное
                        </Button>
                    </Grid>
                </Grid>
            )}
        </>
    );
};

export default SingleAssetPage;