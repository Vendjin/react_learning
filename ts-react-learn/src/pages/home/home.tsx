import {FC, useCallback, useEffect, useMemo, useRef} from "react";
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {Box, Grid, Typography} from "@mui/material";
import {MainBox} from "../../components/mainBox/mainBox";
import {ItemDetail, ItemGraph, PriceIndicator, TopCardItem} from "./styles";
import {getFavoriteAssets} from "../../store/thunks/assets/assetsThunk";
import AreaChart from "../../components/charts/areaChart/areaChart";
import TrendUp from '../../assets/images/chart/trend-up.svg';
import TrendDown from '../../assets/images/chart/trend-down.svg';

const Home: FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const favoriteAssets: any[] = useAppSelector(state => state.assets.favoriteAssets)
    const fetchDataRef = useRef(false)

    const favoriteAssetName = useMemo(() => ['bitcoin', 'ethereum'], [])

    // при переходе на другую страницу происходит баг, подгружается еще запрос, код удаляет дубликаты
    const filteredArray = favoriteAssets.filter(
        (value, index, array) => index === array.findIndex(t => t.name === value.name)
    )

    const fetchData = useCallback((data: string[]) => {
        data.forEach((element: string) => {
            dispatch(getFavoriteAssets(element))
        })
    }, [dispatch])


    useEffect(() => {
        //Костыль повторного рендера со StrictMode. если тру, то сделать пустой return
        if (fetchDataRef.current) return
        fetchDataRef.current = true
        fetchData(favoriteAssetName)
    }, [favoriteAssetName, fetchData])

    const renderFavoriteBlock = filteredArray.map((element: any) => {
        console.log(element)
        const currentPrice = element.singleAsset.map(
            (element: any) => element.current_price
        );
        const currentCapitalize = element.singleAsset.map(
            (element: any) => element.market_cap
        );

        const changePrice = element.singleAsset.map(
            (element: any) => Number(element.market_cap_change_percentage_24h).toFixed(2)
        )

        return (
            <Grid item lg={6} md={6} xs={12} key={element.name}>
                <TopCardItem container>
                    <Grid item lg={6} md={6} xs={12}>
                        <Typography variant='h3' fontSize={20} fontWeight='bold' textTransform={"capitalize"}>
                            {element.name}
                        </Typography>
                        <ItemDetail >
                            <Typography variant='h3' fontSize={32} fontWeight='bold'>
                                ${currentPrice}
                            </Typography>
                            <PriceIndicator className={changePrice > 0
                                ? 'positive'
                                : 'negative'
                            }>
                                {changePrice > 0
                                 ? <img src={TrendUp} alt={'trend-up'}/>
                                 : <img src={TrendDown} alt={'trend-down'}/>
                                }
                                <Typography fontSize={14}>{changePrice}%</Typography>
                            </PriceIndicator>
                        </ItemDetail>
                    </Grid>

                    <ItemGraph item lg={6} md={6} xs={12}>
                        <AreaChart data={element.data}/>
                    </ItemGraph>
                </TopCardItem>
            </Grid>
        )
    })

    return (
        <MainBox>
            <Grid container spacing={2}>
                {renderFavoriteBlock}
            </Grid>

        </MainBox>
    )
}

export default Home;