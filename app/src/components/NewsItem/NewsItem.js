import styles from './NewsItem.module.css';
import {Link} from 'react-router-dom'


function NewsItem(props) {
    const isTop = props.top 

    return (
        <Link className={styles.link} to={'/news/' + props.id}>
        <li className={isTop? styles.topListItem : styles.listItemStyle}>
            <img className={ props.top ? styles.topImg : styles.img} src={props.img} alt="" />
            <div className={styles.content}>
                <h2 className={ props.top ? styles.topText : styles.text}>{props.title}</h2>
            </div>

        </li>
        </Link>
    )
}

export default NewsItem;