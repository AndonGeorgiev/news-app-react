import styles from './RegisterPage.module.css';
import React, { useState } from 'react'
import {register, userInfo} from '../../services/user';
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
            let result = await register(loginData);
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
        }  else {
            setErrors(state => ({ ...state, email: false }))
        }

    }


    function validatePassword(e) {
        let currentPassword = e.target.value;
        if (currentPassword.length < 3) {
            setErrors(state => ({ ...state, password: 'Your name sould be at least 3 characters!' }))
        }   else {
            setErrors(state => ({ ...state, password: false }))
        }

    }


    return (
        <div className={styles.body}>
            <form onSubmit={createHandler} className={styles.form}>
                <div className={styles.title}>Register</div>
                <div className={styles.subtitle}>Welcome to our website!</div>
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


                <div className={[styles.inputContainer, styles.ic2].join(' ')}>
                <select className={styles.input} name="role" id="tag">
                    <option value="reader">Reader</option>
                    <option value="redactor">Redactor</option>
                    <option value="journalist">Journalist</option>
                    <option value="admin">Admin</option>
                </select>
                <div className={styles.cut}></div>
                <label htmlFor="tag" className={styles.placeholder}>Role</label>
            </div>





                <button type="text" className={styles.submit}>Register</button>
            </form>
        </div >
    )
}


export default LoginPage;