import styles from './PacmanAnimation.module.scss'

const PacmanAnimation = () => {
  return (
    <div className={styles.container}>
        <div className={styles.pacman}></div>
        <div className={styles.path}></div>
        <div className={styles.path}></div>
        <div className={styles.path}></div>
        <div className={styles.path}></div>
        <div className={styles.path}></div>
        <div className={styles.path}></div>
        <div className={styles.path}></div>
        <div className={styles.path}></div>
    </div>
  )
}

export default PacmanAnimation
