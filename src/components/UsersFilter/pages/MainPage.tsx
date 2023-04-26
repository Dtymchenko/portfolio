import ListUsers from '../components/ListUsers/ListUsers';
import ListUsersHeader from '../components/ListUsersHeader/ListUsersHeader';
import FilterUsers from './../components/FilterUsers/FilterUsers';
import { useAppSelector } from '../../../hooks/redux-hooks';
import styles from '../UsersFilter.module.scss';
import Loader from '../components/Loader/Loader';

const MainPage = () => {
  const isLoading = useAppSelector((state) => state.user.isLoading);

  return !isLoading ? (
    <div className={styles.main_wrapper}>
      <FilterUsers />
      <div>
        <ListUsersHeader />
        <ListUsers />
      </div>
    </div>
  ) : (
    //   <Loading />
    <Loader />
  );
};

export default MainPage;
