import styles from './ListUsers.module.scss';
import ListUserItem from '../ListUsersItem/ListUserItem';
import { useAppSelector } from '../../../../hooks/redux-hooks';
import { IUserFilter } from '../../../../interface';

const ListUsers = () => {
  const filteredItems = useAppSelector((state) => state.user.filteredItems);

  return (
    <ul className={styles.items_list}>
      {filteredItems?.map((item: IUserFilter, index: number) => {
        return <ListUserItem key={item.id} index={index} item={item} />;
      })}
    </ul>
  );
};

export default ListUsers;
