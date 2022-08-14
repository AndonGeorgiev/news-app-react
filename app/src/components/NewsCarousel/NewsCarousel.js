import styles from './NewsCarousel.module.css';
import React from 'react';
import NewsItem from '../NewsItem/NewsItem'
import Carousel from 'react-elastic-carousel';
import { getNews } from './../../services/news'

function NewsCarousel(props) {

    let [news, setNews] = React.useState([]);

    async function setData() {

        let url = 'http://localhost:4000/news?' + new URLSearchParams({ 'query': props.tag });
        let data = await getNews(url);

        setNews(data);
    }
    React.useEffect(function () {
        setData()
    }, [])
    const breakPoints = [{ width: 1200, itemsToShow: 3 }, { width: 1500, itemsToShow: 4 }, { width: 1700, itemsToShow: 4 }]

    return (
        <ul className={styles.styleList}>
            <div className={styles.tag}>
                <p>{props.tag}</p>
            </div>
            <Carousel breakPoints={breakPoints}>
                {news.map(newsData => <NewsItem key={newsData._id} id={newsData._id} title={newsData.title} img={newsData.picture}></NewsItem>)}
            </Carousel>
        </ul>
    )
}

export default NewsCarousel;