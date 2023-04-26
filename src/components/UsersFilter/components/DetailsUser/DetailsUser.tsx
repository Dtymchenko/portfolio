import React from 'react';
import styles from './DetailsUser.module.scss';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux-hooks';
import { Link, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { IUserFilter } from '../../../../interface';
import axios from 'axios';
import { USERSFILTER_API } from '../../../../API';
import { setIsLoading } from '../../../../redux/slices/userSlice';

const DetailsUser = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const [item, setItem] = React.useState<IUserFilter>();

  React.useEffect(() => {
    const getDetail = async () => {
      try {
        dispatch(setIsLoading(true));
        const response = await axios.get(`${USERSFILTER_API}/${params.id}`);
        setItem(response.data);
      } catch (error) {
        alert(error);
        console.log(error);
      } finally {
        dispatch(setIsLoading(false));
      }
    };
    getDetail();
  }, [params.id]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <Link to={'..'}>Return to main page</Link>
            <h2>
              {item?.firstName} {item?.lastName}
            </h2>
          </div>

          <div className={styles.body}>
            <div className={styles.img}>
              <img src={item?.image}></img>
            </div>
            <div className={styles.text}>
              <div>
                <p>Age: {item?.age}</p>
                <p>Gender: {item?.gender}</p>
                <p>Email: {item?.email}</p>
                <p>Phone: {item?.phone}</p>
                <p>Username: {item?.username}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsUser;
