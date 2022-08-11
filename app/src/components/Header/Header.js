import styles from './Header.module.css'
import { Link } from "react-router-dom";


function Header() {
    return (
        <header>
            <nav className={styles.nav}>

                <Link className={styles.logo} to='/' >BigNews</Link>

                <ul className={styles.ul}>
                    <div className={styles.div}>
                        <li className={styles.li}><Link  className={styles.a} to="/news/bulgaria">България</Link></li>
                        <li className={styles.li}><Link  className={styles.a} to='/news/world'>Светът</Link></li>
                        <li className={styles.li}><Link  className={styles.a} to="/news/sport">Спорт</Link></li>
                        <div className={styles.div}>
                            <li className={styles.li}><Link className={styles.a} to="/news/create">Добави Новина</Link></li>
                        </div >

                    </div>


                    {/* <div className={styles.div}>
                <li><a href="/register">Register</a></li>
                <li><a href="/login">Login</a></li>
            </div> */}
                </ul>
            </nav>
        </header>
    )
}

export default Header;