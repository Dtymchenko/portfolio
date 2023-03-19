import React from 'react'
import styles from './Header.module.scss'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
    <div className={styles.flex__container}>
      <div className={styles.headerLeft}>
        <Link to="/">
          <div className={styles.headerLink}>
            <img
              width="40px"
              height="40px"
              border-radius="50%"
              src="/img/logo.jpg"
              alt="logo"
            ></img>
          </div>
        </Link>
        <div className={styles.headerInfo}>
          <h2>Portfolio WebSite</h2>
          <h4>By Dmytro Tymchenko</h4>
        </div>
      </div>
      <div className={styles.headerMid}>
        <Link to="/about">
          <p>About me</p>
        </Link>
        <Link to="/contact">
          <p>Contacts</p>
        </Link>
        <Link to="/projects">
          <p>Projects</p>
        </Link>
      </div>
      <div className={styles.headerRight}>
        <Link to="/signup" className={styles.signup}>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13ZM20.2589 19.2183C20.5336 19.7117 20.2043 20.2902 19.6515 20.4054C14.6047 21.4572 9.39524 21.4572 4.34843 20.4054C3.79562 20.2902 3.46638 19.7117 3.74108 19.2183C4.34666 18.1307 5.30069 17.1749 6.52112 16.4465C8.09292 15.5085 10.0188 15 12 15C13.9812 15 15.907 15.5085 17.4788 16.4465C18.6993 17.1749 19.6533 18.1307 20.2589 19.2183Z"
          />
        </svg>
        Sign Up
        </Link>
      </div>
    </div>
  </header>
  )
}

export default Header
