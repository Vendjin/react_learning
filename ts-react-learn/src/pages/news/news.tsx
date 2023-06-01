import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {getNews} from "../../store/thunks/news/newsThunk";
import {Box, Grid, Link, Typography} from "@mui/material";
import {MainBox} from "../../components/mainBox/mainBox";
import {NewsBlock, NewsContent} from "./style";

const News = () => {
    const dispatch = useAppDispatch();
    const {news} = useAppSelector(state => state.news)

    useEffect(() => {
        dispatch(getNews())
    }, [dispatch])

    const renderNewsBlock = news.map((element: any) => (
        <NewsBlock gap={5}>
            <Grid item xs={12} md={3}>
                <img src={element.imageurl} alt={element.categories}/>
            </Grid>
            <NewsContent item xs={12} md={9}>
                <Box>
                    <Typography variant={'h3'} sx={{marginBottom: 4}}>{element.title}</Typography>

                    <Typography variant={'body1'}>
                        {element.body.length < 250
                            ? element.body
                            : `${element.body.slice(0, 250)}...`
                        }
                    </Typography>
                </Box>

                <Typography variant='h4' sx={{marginTop: 2}}>
                    <Link href={element.url} target='_blank'>Read more</Link>
                </Typography>
            </NewsContent>
        </NewsBlock>
    ))

    return (
        <div>
            <MainBox>
                {renderNewsBlock}
            </MainBox>
        </div>
    );
};

export default News;