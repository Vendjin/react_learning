import React, {FC, useCallback, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {getNews} from "../../store/thunks/news/newsThunk";
import {Box, Grid, Link, Typography} from "@mui/material";
import {MainBox} from "../../components/mainBox/mainBox";
import {NewsBlock, NewsContent} from "./style";

const News: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const {news} = useAppSelector(state => state.news)
    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        setNewsItems(news.slice(0, 10))
    }, [news])

    useEffect(() => {
        dispatch(getNews())
    }, [dispatch])

    const handleScroll = useCallback((event: any) => {
        if (event.target.documentElement.scrollHeight -
            (event.target.documentElement.scrollTop + window.innerHeight) < 100
        ) {
            const nextVisibleItems = news.slice(0, newsItems.length + 10);
            setNewsItems(nextVisibleItems)
        }
    }, [news, newsItems.length])

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [newsItems, handleScroll])


    const renderNewsBlock = newsItems.map((element: any) => (
        <NewsBlock gap={5} key={element.id}>
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