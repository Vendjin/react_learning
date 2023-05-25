import {FC, useCallback, useEffect, useMemo, useRef} from "react";
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {Grid, Typography} from "@mui/material";
import {MainBox} from "../../components/mainBox/mainBox";
import {ItemDetail, ItemGraph, TopCardItem} from "./styles";
import {getFavoriteAssets} from "../../store/thunks/assets/assetsThunk";
import AreaChart from "../../components/charts/areaChart/areaChart";

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

    console.log(favoriteAssets)

    useEffect(() => {
        //Костыль повторного рендера со StrictMode. если тру, то сделать пустой return
        if (fetchDataRef.current) return
        fetchDataRef.current = true
        fetchData(favoriteAssetName)
    }, [favoriteAssetName, fetchData])

    const renderFavoriteBlock = filteredArray.map((element: any) => {
        const currentPrice = element.data.prices[0];
        const currentCapitalize = element.data.market_caps[0];

        return (
            <Grid item lg={6} md={6} xs={12} key={element.name}>
                <TopCardItem container>
                    <Grid item lg={6} md={6} xs={12}>
                        <Typography variant='h3' fontSize={20} fontWeight='bold' textTransform={"capitalize"}>
                            {element.name}
                        </Typography>
                        <ItemDetail >
                            <Typography variant='h3' fontSize={32} fontWeight='bold'>
                                ${currentPrice[1].toFixed(3)}
                            </Typography>
                            <Typography variant='h3' fontSize={18} mt={1}>
                                {currentCapitalize[1].toFixed(0)}
                            </Typography>
                        </ItemDetail>
                    </Grid>

                    <ItemGraph item lg={6} md={6} xs={12}>
                        <AreaChart data={element.data.prices}/>
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