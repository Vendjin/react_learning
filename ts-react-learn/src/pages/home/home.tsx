import {FC, useCallback, useEffect, useMemo, useRef} from "react";
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {Box, Grid, Typography} from "@mui/material";
import {MainBox} from "../../components/mainBox/mainBox";
import {ItemDetail, ItemGraph, LineChartBlock, PriceIndicator, TopCardItem} from "./styles";
import {getFavoriteAssets} from "../../store/thunks/assets/assetsThunk";
import AreaChart from "../../components/charts/areaChart/areaChart";
import TrendUp from '../../assets/images/chart/trend-up.svg';
import TrendDown from '../../assets/images/chart/trend-down.svg';
import LineChart from "../../components/charts/lineChart/lineChart";
import {IChartData, ISingleAsset} from "../../common/types/assets/iAssets";

const Home: FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const favoriteAssets: IChartData[] = useAppSelector(state => state.assets.favoriteAssets)
    const fetchDataRef = useRef(false)

    const favoriteAssetName =  ['bitcoin', 'ethereum'];

    // при переходе на другую страницу происходит баг, подгружается еще запрос, код удаляет дубликаты
    const filteredArray = useMemo(() => {
        return favoriteAssets.filter(
            (value, index, array) => index === array.findIndex(t => t.name === value.name)
        )
    }, [favoriteAssets])

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


    const renderFavoriteBlock = filteredArray.map((element: IChartData) => {
        console.log(filteredArray)
        let currentPrice = 0;
        let changePrice = 0;
        element.singleAsset.forEach((element: ISingleAsset) => {
            currentPrice = element.current_price
            changePrice = element.market_cap_change_percentage_24h
        })

        /*// первичный вариант, но не подошел тк нужно указыват ьиндекс
        const currentPrice = element.singleAsset.map(
            (element: any) => element.current_price
        );

        const changePrice = element.singleAsset.map(
            (element: any) => element.market_cap_change_percentage_24h
        )*/

        return (
            <Grid item lg={6} md={6} xs={12} key={element.name}>
                <TopCardItem container>
                    <Grid item lg={6} md={6} xs={12}>
                        <Typography variant='h3' fontSize={20} fontWeight='bold' textTransform={"capitalize"}>
                            {element.name}
                        </Typography>
                        <ItemDetail>
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
                                <Typography fontSize={14}>{Number(changePrice).toFixed(2)}%</Typography>
                            </PriceIndicator>
                        </ItemDetail>
                    </Grid>

                    <ItemGraph item lg={6} md={6} xs={12}>
                        <AreaChart data={element.priceChartData}/>
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

            <LineChartBlock container>
                {
                    filteredArray.length &&
                    <Grid item xs={12} sm={12} lg={12}>
                        <LineChart data={filteredArray}/>
                    </Grid>
                }
                {/* <Grid item xs={12} sm={12} lg={12}>
                    {filteredArray.length && <LineChart data={filteredArray}/>}
                </Grid>*/}
            </LineChartBlock>

        </MainBox>
    )
}

export default Home;