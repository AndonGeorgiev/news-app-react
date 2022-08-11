import styles from './NewsCarousel.module.css';
import React from 'react';
import NewsItem from '../NewsItem/NewsItem'
import Carousel from 'react-elastic-carousel';

function NewsCarousel(props) {

    let [news, setNews] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:4000/news?'+ new URLSearchParams({ 'tag': props.tag}))
            .then((data) =>{ 
               return data.json();
            })
            .then((newsData) => {

                setNews(newsData)
                console.log(newsData)
            });
;
    }, [])
    const breakPoints = [{ width: 1200, itemsToShow: 3 }, { width: 1500, itemsToShow: 4 }, { width: 1700, itemsToShow: 5 }]

    return (
        <ul className={styles.styleList}>
            <div className={styles.tag}>
                <p>{props.tag}</p>
            </div>
            <Carousel breakPoints={breakPoints}>
                {news.map(news => <NewsItem  key={news._id} id={news._id} title={news.title} img={news.picture}></NewsItem>)}
            </Carousel>
        </ul>
    )
}

export default NewsCarousel;