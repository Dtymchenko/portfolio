import styles from './Footer.module.scss'

const Footer = () => {

    const footer = "Your Advertisement Could Be Here :)"

    return (
        <footer>
                <div className={styles.footerCover}>
                    <span className={styles.footerSpanChange}>{footer}</span>
                    <span className={styles.footerSpan}>That's just a joke!</span>
                </div>
            </footer>
    );
}

export default Footer
