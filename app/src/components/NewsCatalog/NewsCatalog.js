import styles from './NewsCatalog.module.css'
import React from 'react';
import NewsItem from '../NewsItem/NewsItem'



function NewsCatalog(props) {

    let imgPath = "/images/" + props.tag + ".png"

    let [news, setNews] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:4000/news?'+ new URLSearchParams({ 'tag': props.tag}))
            .then((data) => data.json())
            .then((news) => {
                setNews(news)
            });

    }, [])

    return (
        <div className={styles.div}>
            <img className={styles.img} src={imgPath} alt="test" />

            <ul className={styles.styleList}>
                {news.map(news => <NewsItem key={news._id} id={news._id}  title={news.title} img={news.picture}></NewsItem>)}
            </ul>
        </div>
    )
}

export default NewsCatalog;