import React from 'react'
import styles from './FormRegAuth.module.scss'
import {FC} from 'react'
import { Link } from 'react-router-dom'

interface FormRegAuthProps {
    title: string,
    handleClick: (email:string, pass: string) => void
}

const FormRegAuth: FC<FormRegAuthProps> = ({ title, handleClick }) => {

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleClick(email, pass)
    }

    return (
    <div className={styles.wrapper}>
        <h1>{title}</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
        <input
            className={styles.input}
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='email'/>
        <input className={styles.input}
            type='password'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder='password'/>
        <button className={styles.button}><a>{title}</a>
            
        </button>
        </form>
        <div>
        <p>Forgot password? <button><Link to='/forgot'>Click here</Link></button></p>
        {
            window.location.pathname === '/login' ?
                <p>No account yet? <button><Link to='/signup'>Register</Link></button></p>
                :
                <p>Have an account? <button><Link to='/login'>Sign in</Link></button></p>
        }
        </div>
    </div>
    )
}

export default FormRegAuth