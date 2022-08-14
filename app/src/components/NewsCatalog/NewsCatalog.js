import styles from './NewsCatalog.module.css'
import React from 'react';
import NewsItem from '../NewsItem/NewsItem'
import {getNews} from './../../services/news'



function NewsCatalog(props) {

    let imgPath = "/images/" + props.tag + ".png"

    let [news, setNews] = React.useState([]);

    React.useEffect(() => {
        
        getNews('http://localhost:4000/news?' + new URLSearchParams({ 'query': props.tag }))
            .then((news) => {
                setNews(news)
            });

    }, [props.tag])

    return (
        <div className={styles.div}>
            <img className={styles.img} src={imgPath} alt={news.title + '  /img of the news'} />

            <ul className={styles.styleList}>
                {news.map(news => <NewsItem key={news._id} id={news._id}  title={news.title} img={news.picture}></NewsItem>)}
            </ul>
        </div>
    )
}

export default NewsCatalog;