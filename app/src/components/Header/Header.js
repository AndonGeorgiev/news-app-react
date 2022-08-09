import styles from './Header.module.css'


function Header() {
    return (
        <header>
            <nav className={styles.nav}>

                <a className={styles.logo} >BigNews</a>

                <ul className={styles.ul}>
                    <div className={styles.div}>
                        <li className={styles.li}><a className={styles.a} href="/catalog">България</a></li>
                        <li className={styles.li}><a className={styles.a} href='/'>Светът</a></li>
                        <li className={styles.li}><a className={styles.a} href="/profile">Спорт</a></li>
                        <div className={styles.div}>
                            <li className={styles.li}><a className={styles.a} href="/catalog/create">Добави Новина</a></li>
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