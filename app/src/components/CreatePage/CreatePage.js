import styles from './CreatePage.module.css';
import React from 'react'
import { createNews } from '../../services/news'
import { useNavigate } from "react-router-dom";




function EditPage(props) {

    let navigate = useNavigate();

    const createHandler =async function(e) {
        e.preventDefault();

        let newsData = Object.fromEntries(new FormData(e.currentTarget))

        let news = await createNews(newsData);
        return navigate('/news/' + news._id)
    }

    return (
        <div className={styles.body}>
            <form onSubmit={createHandler} className={styles.form}>
            <div className={styles.title}>Create</div>
            <div className={styles.subtitle}>Create news!</div>
            <div className={[styles.inputContainer, styles.ic1].join(' ')}>
                <input id="title" className={styles.input} type="text" name="title"  placeholder=" " />
                <div className={styles.cut}></div>
                <label htmlFor="title" className={styles.placeholder}>Title</label>
            </div>

            <div className={[styles.inputContainer, styles.ic2].join(' ')}>
                <input id="img" className={styles.input} name="picture"  type="text" placeholder=" " />
                <div className={styles.cut}></div>
                <label htmlFor="img" className={styles.placeholder}>Image URL</label>
            </div>

            <div className={[styles.inputArea, styles.ic2].join(' ')}>
                <textarea id="email"  name="text" className={[styles.input, styles.textarea].join(' ')} type="text" placeholder=" " />
                <div className={styles.cut}></div>
                <label htmlFor="email" className={styles.placeholder}>Description</label>
            </div>

            <div className={[styles.inputContainer, styles.ic2].join(' ')}>
                <select className={styles.input} name="tag" id="tag">
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="World">World</option>
                    <option value="Sport">Sport</option>
                </select>
                <div className={styles.cut}></div>
                <label htmlFor="tag" className={styles.placeholder}>Tag</label>
            </div>




            <button type="text" className={styles.submit}>Create News</button>
        </form>
        </div >
    )
}


export default EditPage;