import styles from './LoginPage.module.css';
import React, { useState } from 'react'
import { login, userInfo } from '../../services/user';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import AuthContext from './../../context/AuthContext';


function LoginPage() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({ email: false, password: false, serverErr: false });
    const value = useContext(AuthContext);

    const createHandler = async function (e) {
        e.preventDefault();

        let loginData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            let result = await login(loginData);
            localStorage.setItem("userId", result.user._id);
            localStorage.setItem("token", result.accessToken);
            localStorage.setItem("role", result.user.role);
            localStorage.setItem("email", result.user.email);
            value.setUser(userInfo())
            navigate('/')
        } catch (error) {
            setErrors(state => ({ ...state, serverErr: error }))
        }

    }

    function validateEmail(e) {
        let currentName = e.target.value;
        if (currentName.length < 3) {
            setErrors(state => ({ ...state, email: 'Your name sould be at least 3 characters!' }))
        } else {
            setErrors(state => ({ ...state, email: false }))
        }

    }


    function validatePassword(e) {
        let currentPassword = e.target.value;
        if (currentPassword.length < 3) {
            setErrors(state => ({ ...state, password: 'Your name sould be at least 3 characters!' }))
        } else {
            setErrors(state => ({ ...state, password: false }))
        }

    }


    return (
        <div className={styles.body}>
            <form onSubmit={createHandler} className={styles.form}>
                <div className={styles.title}>Login</div>
                <div className={styles.subtitle}>Welcome again!</div>
                {errors.serverErr ? <p className={styles.error}>{errors.serverErr}</p> : ''}



                <div className={[styles.inputContainer, styles.ic1].join(' ')}>
                    <input id="email" onBlur={validateEmail} className={styles.input} type="text" name="email" placeholder=" " />
                    <div className={styles.cut}></div>
                    <label htmlFor="email" className={styles.placeholder}>Email</label>

                </div>
                {errors.email ? <p className={styles.error}>{errors.email}</p> : ''}

                <div className={[styles.inputContainer, styles.ic2].join(' ')}>
                    <input id="password" className={styles.input} name="password" onBlur={validatePassword} type="password" placeholder=" " />
                    <div className={styles.cut}></div>
                    <label htmlFor="password" className={styles.placeholder}>Password</label>
                </div>
                {errors.password ? <p className={styles.error}>{errors.password}</p> : ''}





                <button type="text" className={styles.submit}>Login</button>
            </form>
        </div >
    )
}


export default LoginPage;