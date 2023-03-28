import React from 'react'
import styles from './ForgotPass.module.scss'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link } from 'react-router-dom';


const ForgotPass = () => {

    const [input, setInput] = React.useState('')
    const auth = getAuth();

    const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        sendPasswordResetEmail(auth, input)
      .then(() => {
        alert('Password reset email sent!')
        })
      .catch((error) => {
        alert(error.message)
      });
    }

  return (
    <div className={styles.wrapper}>
        <span>
        Enter your email and we will send you link
        </span>
            <form className={styles.form} onSubmit={handleClick}>
                <input className={styles.input}
                    type="email"
                    placeholder='Enter your email'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}/>
                <button className={styles.button}>OK</button>
            </form>
            <button><Link to='/'>Return to main</Link></button>
    </div>
  )
}

export default ForgotPass