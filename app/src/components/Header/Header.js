import styles from './Header.module.css'
import { Link } from "react-router-dom";
import {useContext} from 'react'
import AuthContext from './../../context/AuthContext'



function Header() {

    const value = useContext(AuthContext);

    function logout() {

        localStorage.clear();
        value.setUser({})


    }
    return (
        <header>
            <nav className={styles.nav}>

                <Link className={styles.logo} to='/' >BigNews</Link>

                <ul className={styles.ul}>
                    {value.user.userId ? <div className={styles.div}>
                        <li className={styles.li}><Link className={styles.a} to="/news/bulgaria">Bulgaria</Link></li>
                        <li className={styles.li}><Link className={styles.a} to='/news/world'>World</Link></li>
                        <li className={styles.li}><Link className={styles.a} to="/news/sport">Sport</Link></li>

                        {value.user.role === 'journalist' ? <div className={styles.div}>
                            <li className={styles.li}><Link className={styles.a} to="/news/create">Add News</Link></li>
                        </div > : ''}
                        <li className={styles.li} ><Link to='/' onClick={logout} className={styles.a} >Logout</Link></li>
                    </div> : ''}


                    {value.user.userId ? '': <div className={styles.div}>
                        <li className={styles.li}><Link className={styles.a} to="/register">Register</Link></li>
                        <li className={styles.li}><Link className={styles.a} to="/login">Login</Link></li>
                    </div>}
                </ul>
            </nav>
        </header>
    )
}

export default Header;