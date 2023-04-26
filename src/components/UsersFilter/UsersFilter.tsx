import React from 'react';
import styles from './UsersFilter.module.scss';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { setItems, setIsLoading } from '../../redux/slices/userSlice';
import Loader from './components/Loader/Loader';
import { USERSFILTER_API } from './../../API';

const UsersFilter = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.user.isLoading);

  React.useEffect(() => {
    const getUsers = async () => {
      try {
        dispatch(setIsLoading(true));
        const data = await axios.get(USERSFILTER_API);
        dispatch(setItems(data.data.users));
        dispatch(setIsLoading(false));
      } catch (error) {
        console.log(error);
        alert(error);
      } finally {
        dispatch(setIsLoading(false));
      }
    };
    getUsers();
  }, []);

  return (
    <div className={styles.app}>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
};

export default UsersFilter;
