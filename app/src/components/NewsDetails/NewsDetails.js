import { useParams } from 'react-router-dom';
import styles from './NewsDetails.module.css';
import React from 'react'
import { getNewsById,deleteNews, likeNews } from './../../services/news'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import {userInfo, getUser} from '../../services/user'


function NewsDetails(props) {
    let { id } = useParams({});
    let navigate = useNavigate();
    const user = userInfo();

    let [newsData, setNewsData] = React.useState([]);

    React.useEffect(() => {
        getNewsById(id)
            .then((news) => setNewsData(news));
    }, []);

    let data = newsData.created_at?.slice(0, 10);
  let   lastData = newsData.updated_at?.slice(0, 10)
    
    async function deleteHandler () {
       await deleteNews(id);
        navigate('/news/'+ (newsData.tag).toLowerCase());
    }

    async function  likeNews1(){
    let news = await likeNews(newsData._id);
       setNewsData(news)
    }
console.log(newsData);
    return (
        <section className={styles.section}>
            <img className={styles.img} src={newsData.picture} alt="" />
            <span className={styles.span}>Author: {user.email}</span>
            <span className={styles.span}>Data: {data || '21.10.2022'}</span>
            <span className={styles.span}>Last updated: {lastData || '21.10.2022'}</span>
            <h1 className={styles.title}>{newsData.title}</h1>
            <p className={styles.p}>{newsData.text}</p>
            { user.role === 'reader'? <div>
                { newsData.likers?.includes(user.userId)
                ?<p>You already have liked the news! Like: {newsData.likers?.length}</p>
                :<span  className={styles.statistic} ><i onClick={likeNews1} className="fa-solid fa-thumbs-up"> </i> {newsData.likers?.length}</span>}
            </div>: ''}
            {user.role === 'admin' || user.role === 'redactor' || user.userId === newsData.creator ?<div>
                <Link to={'/news/edit/'+id} className={styles.button} >Edit</Link>
                <button onClick={deleteHandler} className={styles.button}> Delete </button>
            </div> : ''}
        </section>
    )
}

export default NewsDetails;