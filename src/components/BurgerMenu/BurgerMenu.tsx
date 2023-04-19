import React from 'react';
import styles from './BurgerMenu.module.scss';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/redux-hooks';
import { setMenuOpen } from '../../redux/slices/mainSlice';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

const BurgerMenu = () => {
  const menuOpen = useAppSelector((state) => state.main.menuOpen);
  const dispatch = useAppDispatch();

  const burgerRef = React.useRef(null);

  React.useEffect(() => {
    if (menuOpen && burgerRef?.current) {
      disableBodyScroll(burgerRef?.current);
    }
    return () => clearAllBodyScrollLocks()
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.burger}
        ref={burgerRef}
        onClick={() => dispatch(setMenuOpen(false))}
      >
        {/* <div className={styles.burgerBtn} onClick={() => dispatch(setMenuOpen(!menuOpen))}>{menuOpen? "Close" : "Open" }</div> */}
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
    </div>
  );
};

export default BurgerMenu;
