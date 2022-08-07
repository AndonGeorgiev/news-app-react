import styles from './NewsItem.module.css';


function NewsItem(props) {
    return (
        <li className={styles.listItemStyle}>
            <img className={styles.img} src={props.img} alt="" />
            <div className="content">
                <h2 className={styles.text}>{props.title}</h2>
                <p className={styles.text}>{props.description}</p>
                <a className={styles.text} href={props.url}>Read more</a>
            </div>

        </li>
    )
}

export default NewsItem;