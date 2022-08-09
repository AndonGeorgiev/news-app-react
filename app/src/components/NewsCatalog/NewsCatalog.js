import styles from './NewsCatalog.module.css';
import React from 'react';
import NewsItem from './../NewsItem/NewsItem'
import Carousel from 'react-elastic-carousel';
const url = "https://newsapi.org/v2/everything?q=tesla&from=2022-07-09&sortBy=publishedAt&apiKey=988cee739618468d87430caa71252075";


function NewsCatalog() {

    let [news, setNews] = React.useState([]);
    const key = 0;

    React.useEffect(() => {
        fetch(url)
            .then((data) => data.json())
            .then((news) => {
                let data = Object.values(news.articles)
                setNews(data)
            });

    }, [])
    const breakPoints = [{width:1200, itemsToShow: 3}]
    

    return (
        <ul className={styles.styleList}>
            <Carousel breakPoints={breakPoints}>
                {news.map(news => <NewsItem url={news.url} title={news.title} img={news.urlToImage}></NewsItem>)}
            </Carousel>
        </ul>
    )
}

export default NewsCatalog;