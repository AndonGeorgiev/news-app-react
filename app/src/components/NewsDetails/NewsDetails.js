import { useParams } from 'react-router-dom';
import styles from './NewsDetails.module.css';
import React from 'react'
import { getNewsById } from './../../services/news'

function NewsDetails(props) {
    let { id } = useParams({});

    let [newsData, setNewsData] = React.useState([]);

    React.useEffect(() => {
        getNewsById(id)
            .then((news) => setNewsData(news));
    }, []);
    
    return (
        <section className={styles.section}>
            <img className={styles.img} src={newsData.picture} alt="" />
            <span className={styles.span}>Author: Andon Georgiev</span>
            <span className={styles.span}>Data: 21.10.2022</span>
            <h1 className={styles.title}>{newsData.title}</h1>
            <p className={styles.p}>{newsData.text}</p>
            <div>
                <span className={styles.statistic} ><i className="fa-solid fa-thumbs-up"> </i> {newsData.like}</span>
                <span className={styles.statistic}><i class="fa-solid fa-thumbs-down"></i> {newsData.like}</span>
            </div>
        </section>
    )
}

export default NewsDetails;