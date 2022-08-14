import styles from './Home.module.css'
import NewsCarousel from '../NewsCarousel/NewsCarousel'
import NewsItem from './../NewsItem/NewsItem'
import React from 'react';
import { getNews } from './../../services/news'



function Home() {

    let [topNews, setTopNews] = React.useState([]);

    async function setData() {

        let url = 'http://localhost:4000/news?' + new URLSearchParams({ 'query': 'lastOne' });
        let data = await getNews(url);
        console.log(data);

        setTopNews(data);
    }
    React.useEffect(function () {
        setData()
    }, [])


    return (
        <>
        <div className={styles.backgroundElement}>
            <p></p>
        </div>
        <NewsItem title={topNews.title}  img={topNews.picture} id={topNews._id} top="true" />
        <NewsCarousel tag="Bulgaria"/>
        <NewsCarousel tag="World"/>
        <NewsCarousel tag="Sport"/>
        </>
    )
}

export default Home;