import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Link to="/">
      <div className={styles.wrapper}>
        <div className={styles.text}>NotFound</div>
        <div className={styles.text}>Click to return to main page</div>
        <img src="/img/404.jpg" alt="Error 404" />
      </div>
    </Link>
  );
};

export default NotFound;
