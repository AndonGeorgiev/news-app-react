import styles from './EditPage.module.css';
import { useParams } from 'react-router-dom';
import React from 'react'
import { getNewsById, editNews } from './../../services/news'
import { useNavigate } from "react-router-dom";




function EditPage(props) {

    let { id } = useParams({});
    let navigate = useNavigate();
    let [news, setNewsData] = React.useState([]);

    React.useEffect(() => {
        getNewsById(id)
            .then((news) => setNewsData(news));
    }, []);

    const editHandler = (e) => {
        e.preventDefault();

        let newsData = Object.fromEntries(new FormData(e.currentTarget))

        editNews(id, newsData);
        return navigate('/news/' + id)
    }

    return (
        <div className={styles.body}>
            <form onSubmit={editHandler} className={styles.form}>
            <div className={styles.title}>Edit</div>
            <div className={styles.subtitle}>Edit the news!</div>
            <div className={[styles.inputContainer, styles.ic1].join(' ')}>
                <input id="title" className={styles.input} type="text" name="title" defaultValue={news.title || ''} placeholder=" " />
                <div className={styles.cut}></div>
                <label htmlFor="title" className={styles.placeholder}>Title</label>
            </div>

            <div className={[styles.inputContainer, styles.ic2].join(' ')}>
                <input id="img" className={styles.input} name="picture" defaultValue={news.picture || ''} type="text" placeholder=" " />
                <div className={styles.cut}></div>
                <label htmlFor="img" className={styles.placeholder}>Image URL</label>
            </div>

            <div className={[styles.inputArea, styles.ic2].join(' ')}>
                <textarea id="email" defaultValue={news.text || ''} name="text" className={[styles.input, styles.textarea].join(' ')} type="text" placeholder=" " />
                <div className={styles.cut}></div>
                <label htmlFor="email" className={styles.placeholder}>Description</label>
            </div>

            <div className={[styles.inputContainer, styles.ic2].join(' ')}>
                <select className={styles.input} name="tag" id="tag">
                    <option value={news.tag || ''}>{news.tag || ''}</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="World">World</option>
                    <option value="Sport">Sport</option>
                </select>
                <div className={styles.cut}></div>
                <label htmlFor="tag" className={styles.placeholder}>Tag</label>
            </div>




            <button type="text" className={styles.submit}>Edit</button>
        </form>
        </div >
    )
}


export default EditPage;